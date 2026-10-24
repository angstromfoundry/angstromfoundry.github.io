---
title: "News"
permalink: /news/
author_profile: true
---

<p><a href="https://x.com/AngstromFoundry/" target="_blank" rel="noopener noreferrer">view on X</a></p>

<div class="news-x-feed" aria-label="Updates from Angstrom Foundry on X">
  <a class="twitter-timeline" data-theme="dark" data-height="650" data-width="100%" data-dnt="true" href="https://twitter.com/AngstromFoundry" target="_blank" rel="noopener noreferrer" aria-label="Angstrom Foundry X timeline"></a>
</div>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

{% if site.posts.size > 0 %}
{% for post in site.posts %}
## [{{ post.title }}]({{ post.url | relative_url }})

{{ post.date | date: "%B %d, %Y" }}

{{ post.excerpt }}
{% endfor %}
{% endif %}
