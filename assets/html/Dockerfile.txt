FROM arm64v8/ubuntu:24.04

LABEL maintainer="Adam Cheong (adam@cheong.net); John Cheong (john@twobit.co)"

################################################################################
########     [1] Set up directories for openwork user: ow

ARG USR=ow
ENV USER=$USR

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get dist-upgrade -y

RUN mkdir -p /etc/sudoers.d && \
    export uid=1000 gid=1000 && \
    mkdir -p /home/$USER && \
    echo "$USER:x:${uid}:${gid}:$USER,,,:/home/$USER:/bin/bash" >> /etc/passwd && \
    echo "$USER:x:${uid}:" >> /etc/group && \
    echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USER && \
    chmod 0440 /etc/sudoers.d/$USER && \
    chown ${uid}:${gid} -R /home/$USER

ENV DEBIAN_FRONTEND=noninteractive


################################################################################
########     [2] Ensure the OpenWorm runtime user can access its kernel cache.

RUN mkdir -p /home/$USER/.cache/pocl/kcache \
    && chown -R 1000:1000 /home/$USER/.cache \
    && chmod 700 /home/$USER/.cache \
    && chmod 700 /home/$USER/.cache/pocl \
    && chmod 700 /home/$USER/.cache/pocl/kcache


################################################################################
########     [3] Create Isolated Python Environment

# Create an isolated Python environment
RUN apt-get update && apt-get install -y python3-venv

RUN python3 -m venv /opt/openworm-venv

ENV PATH="/opt/openworm-venv/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"


################################################################################
########     [4] Update/install essential libraries and working home directory

RUN apt-get update
RUN apt-get install -y --no-install-recommends apt-utils \
    wget nano htop build-essential make git automake autoconf \
    g++ rpm libtool libncurses5-dev zlib1g-dev bison flex \
    sudo xorg openbox x11-xserver-utils \
    libxext-dev libncurses-dev mercurial \
    freeglut3-dev libglu1-mesa-dev libglew-dev python3-dev python3-pip \
    kmod dkms linux-source linux-headers-generic \
    maven openjdk-8-jdk \
    libnuma1 \
    openmpi-bin  libopenmpi-dev \
    libgl1 libglx-mesa0  libgl1-mesa-dri libfreetype6-dev \
    libxft-dev  unzip ffmpeg xvfb tmux strace

#RUN sudo pip install --upgrade pip

RUN sudo usermod -a -G video $USER

ENV HOME=/home/$USER
WORKDIR $HOME


################################################################################
########     [5] Utilities for debugging purpose (handy but non-essential)

RUN apt-get update && \
    apt-get install -y gdb


################################################################################
########     [6] Install NEURON simulator

# Install NEURON in the same Python environment used by OpenWorm
RUN /opt/openworm-venv/bin/python -m pip install neuron==9.0.2

RUN /opt/openworm-venv/bin/python -c \
    "import neuron; print('NEURON version:', neuron.__version__)"


################################################################################
########     [7] Install c302 for building neuronal network models

RUN git clone https://github.com/openworm/c302.git && \
    cd c302 && \
    git checkout ow-0.9.8 && \
    sudo /opt/openworm-venv/bin/pip install .

# Note: pyNeuroML installed with the above library


################################################################################
########     [8] Install Sibernetic for the worm body model

RUN git clone https://github.com/openworm/sibernetic.git && \
    cd sibernetic && \
    git checkout ow-0.9.8b  # fixed to a specific branch


################################################################################
########     [9] Install extra Python dependencies

RUN sudo pip install ruff  --break-system-packages


################################################################################
########     [10] Set some paths//environment variables for everyone

ENV C302_HOME=$HOME/c302/c302
ENV SIBERNETIC_HOME=$HOME/sibernetic
ENV PYTHONPATH=$HOME/c302:$SIBERNETIC_HOME

ENV NEURON_HOME=/opt/openworm-venv
ENV NEURON_MODULE_OPTIONS=-nogui


################################################################################
########     [11] Install LLVM compiler/linker components used by POoL OpenCL runtime
########          On Ubuntu, ld is normally supplied by the binutils package.

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        binutils \
        clang \
        llvm \
        lld \
    && rm -rf /var/lib/apt/lists/*

RUN command -v ld && \
    command -v clang && \
    command -v ld.lld

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        llvm-16 \
        lld-16 \
    && rm -rf /var/lib/apt/lists/*

RUN command -v ld && \
    command -v clang && \
    command -v ld.lld


################################################################################
########     [12] Install PoCL OpenCL development packages and CPU runtime
########     
########     Package               Purpose
########     
########     ocl-icd-opencl-dev    OpenCL library and development files
########     opencl-headers        OpenCL C API headers
########     opencl-clhpp-headers  OpenCL C++ API headers
########     pocl-opencl-icd       CPU-based OpenCL implementation
########     clinfo                Reports available OpenCL platforms

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        clinfo \
        ocl-icd-opencl-dev \
        opencl-headers \
        opencl-clhpp-headers \
        pocl-opencl-icd \
        && rm -rf /var/lib/apt/lists/*

# Compatibility header for older OpenCL C++ applications
RUN ln -s /usr/include/CL/opencl.hpp /usr/include/CL/cl.hpp

# Verify OpenCL installation
RUN echo "OpenCL platforms:" && clinfo -l


################################################################################
########     [13] Remove warning messages for non-existent MVL24 (in 3rd quadrant)

RUN cd sibernetic && \
    tr '\n' '\0' < main_sim.py  |  sed 's/in range(24)/in range(23)/3'  |  tr '\0' '\n' > main_sim && \
    mv main_sim main_sim.py


################################################################################
########     [14] Remove extra blank lines in Sibernetic screen output log

RUN cd sibernetic/src && \
    sed -i 's|"\\n\[\[ Step "|"\[\[ Step "|' owPhysicsFluidSimulator.cpp


################################################################################
########     [15] Reconfigure makefile and build Sibernetic
########          using clang++ and OpenCL 1.2

RUN cd sibernetic && \
    sed -i 's|GCC C++|Clang++|g' makefile && \
    sed -i 's|^CC = g++ -std=c++14 -Wall|CC = clang++ -std=c++14|' makefile && \
    sed -i 's|^CXXFLAGS += -fPIE||' makefile && \
    sed -i 's|^EXTRA_LIBS :=.*|EXTRA_LIBS :=-fuse-ld=lld -lpython3.12|' makefile && \
    sed -i 's|--embed||g' makefile && \
    sed -i 's|-I/opt/AMDAPPSDK-3.0/include/ -I/opt/AMDAPP/include/ -I$(INCDIR) -Wall|-I$(INCDIR) -DCL_TARGET_OPENCL_VERSION=120 -DCL_HPP_TARGET_OPENCL_VERSION=120 -DCL_HPP_MINIMUM_OPENCL_VERSION=120 -DCL_HPP_ENABLE_PROGRAM_CONSTRUCTION_FROM_ARRAY_COMPATIBILITY |g' makefile

RUN cd sibernetic && \
    make clean && make all && ldd ./Release/Sibernetic


################################################################################
########     [16] Dynamic linking of PoCL kernels during runtime for clang & aarch64
########          (resolves 'Executable "ld" doesn't exist!' launch environ problem)

ENV POCL_DEVICES=pthread
ENV COMPILER_PATH=/usr/bin:/usr/lib/llvm-16/bin

RUN cd sibernetic && \
    sed -i 's|env = {|env = {\n        "COMPILER_PATH":"/usr/bin:/usr/lib/llvm-16/bin",|' sibernetic_c302.py && \
    sed -i 's|env = {|env = {\n        "POCL_DEVICES":"pthread",|' sibernetic_c302.py && \
    sed -i 's|env = {|env = {\n        "NEURON_HOME":"/opt/openworm-venv",|' sibernetic_c302.py && \
    sed -i 's|env = {|import platform\n    env = {|' sibernetic_c302.py && \
    sed -i 's|env = {|arch = platform.machine().lower()\n    env = {|' sibernetic_c302.py && \
    sed -i 's|env = {|if arch in ("arm64", "aarch64"):\n    env = {|' sibernetic_c302.py && \
    sed -i 's|env = {|    arch = "aarch64"\n    env = {|' sibernetic_c302.py && \
    sed -i 's|env = {|elif arch == "amd64":\n    env = {|' sibernetic_c302.py && \
    sed -i 's|env = {|    arch = "x86_64"\n    env = {|' sibernetic_c302.py && \
    sed -i 's|env = {|mech = os.path.join(os.path.abspath(sim_dir), arch, "libnrnmech.so")\n    env = {|' sibernetic_c302.py && \
    sed -i 's|env = {|if not os.path.isfile(mech):\n        raise RuntimeError("NEURON mechanism library not found: %s" % mech)\n\n    env = {|' sibernetic_c302.py


################################################################################
########     [17] Prioritize Ubuntu system tools over Nix tools

# Required for POCL's runtime OpenCL kernel linking.
ENV PATH="/opt/openworm-venv/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"


################################################################################
########     [18] Set up JupyterLab

#RUN sudo pip install notebook jupyterlab --break-system-packages


################################################################################
########     [19] Copy master openworm Python script

# Not working with --chown=$USER:$USER
COPY ./master_openworm.py $HOME/master_openworm.py
RUN sudo chown $USER:$USER $HOME/master_openworm.py

COPY ./replay.py $HOME/replay.py
RUN sudo chown $USER:$USER $HOME/replay.py

RUN printf '\n\nalias cd..="cd .."\nalias h=history\nalias ll="ls -alth"\n' >> ~/.bashrc

RUN pip list

RUN echo "Built the OpenWorm Docker image!"

################################################################################