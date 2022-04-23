---
title: Hello World
layout: "base.njk"
---

Hello test


{% for post in collections.posts %}

- [{{ post.data.title}}]({{ post.url }})

{% endfor %}