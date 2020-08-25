---
layout: 'main.html'
permalink: '/'
---

# Bienvenue chez Julio

## L'idée

Bienvenue chez moi 🙂!

Vous trouverez ici les **outils** que j'utilise pour avancer dans la vie en gardant la pêche (le sport, le travail, le potager, ...).

Il n'y a rien à acheter, je ne suis pas un gourou. Je me suis simplement dit que c'était sympa de **partager** tout ce que j'ai pu apprendre sur le net et avec des bouquins et de donner mon point de vue et mon ressenti sur les supers outils que peuvent nous présenter les gourous des temps modernes.

J'ai rangé mes articles par catégorie pour qu'on s'y retrouve mais parfois, certains outils peuvent se retrouver dans plusieurs catégories. J'ai d'ailleurs ajouté une catégorie magique : **la réflexion** qui n'a rien à voir avec un outil ! Il s'agit plutôt d'une catégorie d'articles où j'essaie de réfléchir à un sujet donné.

Je vous souhaite une bonne lecture !

## Mes derniers posts

{% assign posts = collections.post | reverse %}
{% for post in posts limit:3 %}

- [{{post.data.postTitle}}]({{post.url | url}})

{% endfor %}
