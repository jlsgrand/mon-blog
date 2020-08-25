---
layout: 'main.html'
permalink: '/potager/'
---

# La main verte

J'adore manger mes propres légumes, mais c'est pas toujours facile d'avoir une production. Quelques tips pour mieux y arriver !

## Les derniers posts

{% for post in collections.garden reversed %}

- [{{post.data.postTitle}}]({{post.url | url}})

{% endfor %}
