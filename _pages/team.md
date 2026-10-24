---
title: null
permalink: /team/
author_profile: true
---

<div class="team-grid" role="list" aria-label="Group members">
{% for member in site.data.members %}
  <article class="team-card" role="listitem">
    <img class="team-portrait" src="{{ member.photo | relative_url }}?v=800" alt="{% if member.photo_alt %}{{ member.photo_alt | escape }}{% else %}Fictional cartoon placeholder portrait for {{ member.name | escape }}{% endif %}" width="800" height="800" loading="lazy" decoding="async">
    <h2 class="team-name">{{ member.name | escape }}</h2>
  </article>
{% endfor %}
</div>
