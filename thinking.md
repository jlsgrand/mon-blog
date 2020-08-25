---
layout: 'main.html'
permalink: '/reflexion/'
---

# Dans quel sens

Mais où est-ce que cela nous mène ?

## Les derniers posts

{% for post in collections.thinking reversed %}

- [{{post.data.postTitle}}]({{post.url | url}})

{% endfor %}
