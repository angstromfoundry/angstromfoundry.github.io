---
title: null
permalink: /
author_profile: true
---

We investigate fundamental properties and coupled emergent phenomena of low-dimensional materials and their surfaces/interfaces — to guide novel strategies for the self-assembly, integration, and nano-manufacturing of quantum-scale components and functional systems.

{% for area in site.data.research %}
{% assign symbol_name = area.id | replace: 'self-assembly', 'assembly' %}
{% assign symbol_path = '/images/research/' | append: symbol_name | append: '-final.svg' %}
<h3 class="research-heading"><a href="{{ '/research/' | relative_url }}#{{ area.id }}"><img class="research-symbol" src="{{ symbol_path | relative_url }}{% if area.id == 'self-assembly' %}?v=raised{% elsif area.id == 'mechanics' %}?v=no-center{% endif %}" alt="" aria-hidden="true" width="56" height="56"><span>{{ area.title }}</span></a></h3>

{{ area.description }}
{% endfor %}
