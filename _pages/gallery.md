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

<style>
  .photo-gallery {
    display: block;
    height: min(70vh, 720px);
    --swiper-pagination-bottom: 0;
    --swiper-pagination-color: var(--global-text-color);
  }

  .photo-gallery swiper-slide {
    box-sizing: border-box;
    height: 100%;
    padding: 0 48px 36px;
  }

  .photo-gallery figure,
  .photo-gallery picture {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .photo-gallery img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .photo-gallery::part(pagination) {
    font-variant-numeric: tabular-nums;
  }
</style>

{% assign gallery_files = site.static_files | sort: 'path' %}
<swiper-container class="photo-gallery" keyboard="true" navigation="true" pagination="true" pagination-type="fraction" rewind="true" auto-height="false">
  {% for image in gallery_files %}
    {% assign extension = image.extname | downcase %}
    {% comment %}Exclude generated WebP sizes: figure.liquid uses them as responsive sources, not separate photos.{% endcomment %}
    {% if image.path contains '/assets/img/gallery/' and site.imagemagick.input_formats contains extension %}
      <swiper-slide>
        {% include figure.liquid loading="eager" path=image.path class="img-fluid rounded z-depth-1" %}
      </swiper-slide>
    {% endif %}
  {% endfor %}
</swiper-container>

---
