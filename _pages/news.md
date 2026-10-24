---
title: "News"
permalink: /news/
author_profile: true
---

{% if site.posts.size > 0 %}
{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%B %d, %Y" }}

{{ post.excerpt }}
{% endfor %}
{% endif %}
