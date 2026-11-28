---
layout: page
title: gallery
permalink: /gallery/
description: Fleeting moments in the great outdoors.
nav: true
nav_order: 5
images:
  slider: true
---

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  {% for file in site.static_files %}
    {% if file.path contains '/assets/img/gallery/' %}
      <swiper-slide>
        {% include figure.liquid loading="eager" path=file.path class="img-fluid rounded z-depth-1" %}
      </swiper-slide>
    {% endif %}
  {% endfor %}
</swiper-container>

---
