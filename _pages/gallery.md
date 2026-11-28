---
layout: page
title: gallery
permalink: /gallery/
description: A collection of photos and moments.
nav: true
nav_order: 5
images:
  slider: true
---

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>
    {% include figure.liquid loading="eager" path="assets/img/gallery/photo-1.jpg" class="img-fluid rounded z-depth-1" %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid loading="eager" path="assets/img/gallery/photo-2.jpg" class="img-fluid rounded z-depth-1" %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid loading="eager" path="assets/img/gallery/photo-3.jpg" class="img-fluid rounded z-depth-1" %}
  </swiper-slide>
</swiper-container>

---
