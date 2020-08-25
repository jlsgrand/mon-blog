---
layout: 'main.html'
permalink: '/travail/'
---

# Travailler mieux

J'aime bien être efficace au travail. Je vous laisse ici ma liste d'outils / techniques que j'ai essayés / adoptés.

## Les derniers posts

{% for post in collections.work reversed %}

- [{{post.data.postTitle}}]({{post.url | url}})

{% endfor %}
