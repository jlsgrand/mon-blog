---
layout: 'main.html'
permalink: '/sport/'
---

# Bouge ton boule

Impossible de passer une semaine sans faire de sport. Il faut que je bouge !

## Les derniers posts

{% for post in collections.sport reversed %}

- [{{post.data.postTitle}}]({{post.url | url}})

{% endfor %}
