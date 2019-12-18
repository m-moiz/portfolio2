---
path: "/post-one"
date: "2019/10/29"
title: "How to query nested subdocument arrays in MongoDB"
author: "Muhammad Moiz"
---

Lets imagine our data looking something like this: 

```javascript
 {
    userId: 12,
    name: 'Cat',
    posts: [
        { 
           id: 1,
           title: 'New Post',
           comments: [
              {
                id: 1,
                comment: "Awww",
                byUser: '13'
              }

              {
                id: 2,
                comment: 'Amazing',
                byUser: '28'

              }
           ]
        }
    ]

 }
```

As we can see, we have nested subdocument arrays