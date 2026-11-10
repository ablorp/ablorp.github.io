---
layout: page
title: 🪱 training 🔍 👀
description: Lookie here... already in motion
img: assets/img/publication_preview/worm_crawling.gif
importance: 1
category: ongoing
---

Inducing thermotactic behavior in a digitally simulated *C. elegans*, equipped with thermosensory transducers for an artificially designed aquarium with pre-programmed temperature gradients, is my *second* most ambitious project (that first one had failed). It is built on top of [OpenWorm](https://openworm.org/), a computational model of a microscopic roundworm called *Caenorhabditis elegans* which has less than 1,000 cells and only 302 neurons. Available since 2011, I became curious why in the past 15 years no one has produced a digital *C. elegans* that crawls towards food the way a real animal does? Thermotaxis may be a better starting point, I thought.

My project uses a bottom-up approach to observe how worm behaviors emerge from a simulation of empirical data derived from scientific experiments. These data has been incorporated into software models. Underlying tools such as [Sibernetic](https://github.com/openworm/sibernetic) and [c302](https://github.com/openworm/c302) are open-source simulation platforms that run these different models. A unified [Docker simulation stack](https://openworm.org/downloads.html#docker) brings all these packages together to run on your local *x86_64* machine. But our newest Macs run on Apple M5 chips. So, I must first find a way to have all these software packages properly configured for the *arm64* CPU.

The following sections show: (i) project planning and progression in reverse chronological order, (ii) acknowledgement of help received from both AI and human, (iii) edit-debug cycle for software configuration, (iv) toolchain mapping, and finally (v) the most recent draft of my project proposal.

The biggest challenge for me as a senior, of course, is juggling Proof School and Watney and iGEM @ BioCurios Lab, making time for bouldering at Dogpatch or Hyperion while trying not to forget my student ambassador role for Cal's pre-college program, and then squeezing out more time for my 🪱 project in between submitting applications to college and *[The Academy](https://theacademysf.com/)*.

---

**🪱 Project Planning and Progression (Aug 2026 to May 2027):**

(2027 Jul 18–22) 🪱 [#WORM27](https://genetics-gsa.org/worm-2027/): 26th International Worm Meeting, Kobe, Japan.

(2027 May 8–14) 🏆 [ISEF 2027](https://www.societyforscience.org/isef/): Computational Neuroscience (NEU) subcategory, Los Angeles, California.

(2027 Apr __) 🥇 [CSEF 2027](https://csef.usc.edu/): Zoology category, USC, Los Angeles, California.

(2027 Mar 7)  🍀 [GGSF 2027](https://ggstemfair.org/): Biological Sciences category, judging and ceremony.

(2027 Feb 28) 🤞 Randall Museum in San Francisco: project drop-off for GGSF.

(2027 Feb 1–21)  ⏳ Prepare final project presentation and poster for GGSF & CSEF.

(2027 Jan 11–15) 🛫 High school trip to NYC.

(2027 Jan 1–9)   🪱 Worm session 4: visual confirmation of thermotactic behaviors?

(2026 Dec 25–31) 🎄 Worm session 3: monitoring of AFD-AIY connectivity.

(2026 Dec 21) 🎊 Masason Annual Activity Report Session 2026 and End of the Year Party in Tokyo.

(2026 Dec 17–20) 🎄 Worm session 2: develop and test transducers for AFD.

(2026 Nov 22–29) 🦃 Worm session 1: aquarium temperature gradient design.

(2026 Nov 11–17) 🗼 iGEM Grand Jamboree in Paris: finalize research design and implementation schedule.

(2026 Nov 5)  ⌛️ [STS 2027](https://www.societyforscience.org/regeneron-sts/) too late for submission by 5pm; revised target date: Feb 28, 2027.

(2026 Nov 5) 🍀 Looking for *C. elegans* already in motion? 🪱 🔍 👀 [Founding Class Fellowship](https://theacademysf.com/program) submitted around 8pm.

(2026 Nov 4)  🪱 movement: 5 secs of crawling <=> 14167 secs (~4hrs) of compute on MacBook Pro (M5 Max + 128 GB).

(2026 Nov 3)  🧙🏻‍♂️ Dockerfile ready for use: image ("openworm/openworm") and container ("openworm_0.9.8").

(2026 Nov 2)  🧙🏻‍♂️ Remove warning message for non-existent MVL24 (in [3rd muscle quadrant](https://adamcheong.com/assets/img/ow/worm_muscles.jpg)).

(2026 Nov 1)  🤖 Dynamic linking of PoCL kernel 'hashParticles' resolved: environ passed to clang subprocess on aarch64.

(2026 Oct 30) 🤖 Reconfigure makefile to build [Sibernetic](https://github.com/openworm/sibernetic) using clang++ and [OpenCL 1.2](https://support.apple.com/en-us/101525).

(2026 Oct 29) 🤖 Priorotize Ubuntu system tools over Nix tools (to resolve environment path errors).

(2026 Oct 28) 🤖 Remove AMD OpenCL drivers [AMD-APP-SDK 3.0](https://github.com/arturxz/AMD-APP-SDK-v3.0) (for x86_64).

(2026 Oct 28) 🤖 Install [PoCL](https://portablecl.org/) development packages and runtime for arm64 (e.g., [LLVM](https://llvm.org/) and [Clang](https://clang.llvm.org/)).

(2026 Oct 28) 🤖 Install [NEURON simulator version 9.0.2](https://www.neuronsimulator.org/en/9.0.2/) (default 8.2.6) for compatibility.

(2026 Oct 28) 🤖 Edit Dockerfile to replace "ubuntu:24.04" (for x86_64) with "arm64v8/ubuntu:24.04" (for aarch64).

(2026 Oct 28) 🧙🏻‍♂️ Configure openworm to run on Apple arm64 CPU (instead of [Rosetta emulation of AMD64](https://ddev.com/blog/amd64-with-rosetta-on-macos/) by default).

(2026 Sep 20) 🪱 Research design: temperature gradient in aquarium, transducers for AFD, monitoring of AFD-AIY link.

(2026 Sep 14) 📝 Revise research plan after review of literature.

(2026 Sep 1)  📝 Project proposal ready for review by Dr. Yetman.

(2026 Aug 28) 🧠 Revisit biomechanical simulations from a neuroscience perspective.

---

🙇🏻‍♂️ **Acknowledgement:** This project would not be possible without the additional computing resources from my dad, a computer scientist 🧙🏻‍♂️ who wishes to acknowledge OpenAI's 🤖 assistance in persuading OpenWorm 🪱 to play nice with our new Macs.

---

🤖 **AI-Assisted [Edit-Debug Cycle](https://github.com/openworm/OpenWorm/blob/master/README.md#quickstart):**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/a.jpg" title="slide a" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

🧙🏻‍♂️ **Human-Assisted Toolchain Mapping:**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/b.jpg" title="slide b" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

🙋🏻‍♂️ **Project Proposal:**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/1.jpg" title="slide 1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/2.jpg" title="slide 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/3.jpg" title="slide 3" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/4.jpg" title="slide 4" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/5.jpg" title="slide 5" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/6.jpg" title="slide 6" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/7.jpg" title="slide 7" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/8.jpg" title="slide 8" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/9.jpg" title="slide 9" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/10.jpg" title="slide 10" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/11.jpg" title="slide 11" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/12.jpg" title="slide 12" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ow/z.jpg" title="slide z" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---
