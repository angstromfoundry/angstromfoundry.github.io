---
title: "Research"
permalink: /research/
author_profile: true
---

{% for area in site.data.research %}
<h2 id="{{ area.id }}">{{ area.title }}</h2>

{{ area.description }}
{% endfor %}
