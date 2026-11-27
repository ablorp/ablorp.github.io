---
layout: page
title: 🤖 llm for robot
description: can local LLM agent handle robotic tasks?
img: assets/img/publication_preview/llm_for_robot.jpg
importance: 1
category: ongoing
---

I plan to evaluate the use of a local LLM agent for robotic tasks by constructing an **LLM robotic stack** that runs a dual-arm deployed system, where the robotic arms connect through an API, and the local agent runs against them continuously to decompose goals into subtasks that feed into action models that ultimately control the robot arms.

In other words, the local LLM runs on a Mac Mini M5 Pro (with 64GB memory) connected to OpenArm 2.0, which executes a variety of robotic tasks in a controlled setting. These tasks can be machine learned using a kinematic equivalent teleoperation rig.

By using a local LLM agent to control a pair of robot arms equipped with grippers (but with the possibility of upgrading to dexterous hands in the future), I hope to demonstrate that _code-as-policy_ is a viable path to _edge intelligence_ for robotics, thus opening up more flexible modes of robotic interaction with local control while enjoying greater autonomy and robust execution at low latency (e.g., robots on Mars executing commands from Earth).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/teleop.jpg" title="Local LLM for Robot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

**Project Schedule (Nov 29 2026 to Dec 20 2026):**

(2026 Dec 20) 👨🏻‍💻 SQS W26 Demo Day: send instructions from Tokyo to 🤖 LLM agent for robot arms 🦾 in California

(2026 Dec 13) 🤖 LLM agent running on Mac Mini + connectivity to 🦾 OpenArm 2.0.

(2026 Dec 6) 🦾 OpenArm 2.0 + 💪 KER teleoperation connectivity.

(2026 Nov 29) 📦 Unbox and set up robotic testbed in the play room.

(2026 Nov 26) 🦃 Day One: joined "SideQuest Sundays" Discord channel & introduce "LLM for robot" project.

---

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/hardware_0.jpg" title="OpenArm 2.0 + KER in Boxes" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/hardware_1.jpg" title="Inside OpenArm 2.0 + KER" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

**Research Background:**

Robot learning today requires collecting large datasets to train an end-to-end model, such as a VLA (Vision-Language-Model) or WAM (World Action Model) model, and then mapping camera frames and instructions directly to motor commands. While the results are impressive, action models suffer from 3 major shortcomings:

1. relies upon huge amounts of robot data; or
2. huge amounts of compute; and
3. not easily generalizable across different robot embodiments or environments.

Therefore, the current approach with action models makes it difficult to adapt an existing model to a new task, a new robot, a new workspace, or a new planet.

However, large language models (LLMs) are already capable of tool use, reasoning, and writing programs. So these capabilities can be readily transferred into robotics. How? By using a local LLM agent to control robots, starting with a pair of robot arms, initially with grippers, but later enhanced with dexterous hands. The agent decomposes goals into subtasks, completes each one by viewing camera feeds, writing control code, and calling models like VLAs or WAMs:

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/llm_robot.jpg" title="Demo of Local LLM Agent for Robotic Tasks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Finally, the agent generates a program that one can run and iterate on by talking to the agent. My contribution here is to experiment with using an LLM agent local to the robotic arms to control tasks execution with greater autonomy and robustness over long distances at low latency.

---

**Prior Experience:**

This is my first attempt at connecting large language models with robotics, starting with a pair of robot arms in a controlled testbed setting. I have prior experience using LLMs such as Claude and Codex, but without API connection to robots. I also have extensive practical hands-on experience with robot arms and grippers (since 9th grade).

For the past 3 years, I have been a robotics intern at Watney Robotics, a venture-backed startup in San Francisco which develops autonomous robots for data centers. I build server rack peripherals and prototype wire harness using CAD tools; assemble robot arms and controllers for teleoperation; as well as train machine learning models, among other things.

This research project is exciting for me because I can study how LLMs and robotics work together programmatically.

---

**Project Proposal:**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/1.jpg" title="slide 1" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/2.jpg" title="slide 2" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/3.jpg" title="slide 3" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/4.jpg" title="slide 4" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/5.jpg" title="slide 5" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/6.jpg" title="slide 6" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/7.jpg" title="slide 7" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/8.jpg" title="slide 8" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/9.jpg" title="slide 9" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/10.jpg" title="slide 10" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/11.jpg" title="slide 11" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/llm/12.jpg" title="slide 12" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---
