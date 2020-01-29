---
path: "/post-one"
date: "2019/10/29"
title: "How to query nested subdocument arrays in MongoDB"
author: "Muhammad Moiz"
---

There are a lot of articles on the web that show you how to perform crud operations on 1 level deep embedded documents (A document has an array in it).I will show you how to do the same operations 2 levels deep (A document has an array of documents and each item in the array has an array of documents). 

Well, that might have sound confusing but lets imagine a real scenario where we might want to create a blog application. We could imagine a user having a bunch of posts and each of those posts having a bunch of comments. Our data would look something like this: 

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

As we can see, we have nested subdocument arrays. Given a schema like this, crud operations on user is trivial. However performing crud operations on comments is not so simple. Lets go through each of the CRUD operations.

### Create

```javascript
//name is coming from req.body
Blog blog = new Blog();
blog.name = name;
let user = await User.findOneAndUpdate({userId}, {$push: {blogs: blog}});

```

We are saying, for the user with the given id, push the new blog we created into the blogs array