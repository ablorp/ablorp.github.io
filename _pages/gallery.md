---
layout: page
title: gallery
permalink: /gallery/
description: Moments in the great outdoors.
nav: true
nav_order: 5
images:
  slider: true
---

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" slides-per-view="1" space-between="20">
  <swiper-slide>
    {% include figure.liquid loading="eager" path="assets/img/gallery/1.jpg" class="img-fluid rounded z-depth-1" %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid loading="eager" path="assets/img/gallery/2.jpg" class="img-fluid rounded z-depth-1" %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid loading="eager" path="assets/img/gallery/3.jpg" class="img-fluid rounded z-depth-1" %}
  </swiper-slide>
</swiper-container>

---
