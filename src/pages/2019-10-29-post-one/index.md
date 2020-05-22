---
path: "/how-to-query-nested-subdocument-arrays-in-MongoDB"
date: "2019/10/29"
title: "How to query nested subdocument arrays in MongoDB"
imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1442&q=80"
author: "Muhammad Moiz"
---

While I was working on one of my projects, I came across a problem that took me quite some time to solve. I was having trouble performing crud operations on multi-level nested documents in [MongoDb](https://www.mongodb.com
(A document has an array of documents and each item in the array has an array of documents).

There is an important scalability issue with the solution I am about to show you. Since document sizes are capped at 16MB in MongoDB, the proposed solution doesn't scale when you have numerous subdocuments.

We could imagine a user having a bunch of posts and each of those posts having a bunch of comments. Our data would look something like this: 

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
                byUser: 'user13'
              }

              {
                id: 2,
                comment: 'Amazing',
                byUser: 'user28'

              }
           ]
        }
    ]

 }
```

Important: Looking above at the json. This is just one use document, if we have a lot of blog posts and comments we will reach the 16MB limit for this document. In this scenario, it is quite unlikely that a user will have 1000's of blog posts or comments, however if we designed our database schema for a particular topic like cats and our document looked like this:

```javascript
 {
    topicId: 1,
    topicName: 'Cats',
    posts: [
        { 
           id: 1,
           title: 'Cats are awesome',
           byUser: 'user1',
           comments: [
              {
                id: 1,
                comment: "Awww",
                byUser: 'user13'
              }

              {
                id: 2,
                comment: 'Amazing',
                byUser: 'user28'

              }
           ]
        }
    ]

 }
```
We can easily imagine that a particular topic can have 1000's of posts by different users. This means we will have numerous subdocuments of posts inside the topic document above thus the document will easily exceed the 16MB limit and our solution won't work. This is a thing to keep in mind when you are designing your database schema.

Given the first schema for the user having a bunch of posts, lets go through each of the CRUD operations. We will go over blog and then comments in each phase.

### Create


```javascript
//name is coming from req.body
const {userId} = req.params;
Blog blog = new Blog();
blog.name = name;
let user = await User.findOneAndUpdate({userId}, {$push: {blogs: blog}});

```

We are saying, for the user with the given id, push the new blog we created into the blogs array.

*Important: Use `yourId = mongoose.Types.ObjectId(yourId)` to explicitly convert your ids to object id to avoid errors. This is helpful in case your id is being returned as a string which will throw errors.*

```javascript
//text is coming from req.body
const {userId, blogId} = req.params;
Comment comment = new Comment();
comment.text = text;

let user = await User.findOneAndUpdate(
   { _id: userId, 'blogs._id': blogId }, 
   { 
      $push: {
         {
            blogs.$.comments: comment
         }
      }

   },(err,doc) => { /*do whatever you want here*/ }
);

```

Now, we need to find a given user with a specific blog post and create a comment inside that blog post. By using **userId** and **blogId** we can find the specific blog post.

$ is a positional operator which specifies the current index. You can imagine if we found the blogId in the first element of the blogs array, **$** would be 0. Then we just push the new comment into that blog post.



### Read

Reading is trivial in both scenarios. We just use the id to find the array and return the array.

```javascript

const { userId } = req.params;

User.find(
	   { _id: userId },
      { 'blogs._id': 1, 'blogs.name': 1 },
      (err,doc) => {/*do whatever you want here*/}
);

```

`{ 'blogs._id': 1, 'blogs.name': 1 }` is the projection field. We are simply saying we want to see id's and names in the returned array which is denoted by 1. If we didn't want to see name in our returned doc we would put 0 instead.

```javascript
let { userId, blogId } = req.params;

User.findOne(
   { _id: userId, 'blogs._id': blogId }, 
   { 'blogs.$.comments': 1 }, 
   (err, doc) => {/*do whatever you want here*/}
);

``` 

### Update

This is probably the most complex part but fear not, we will understand every bit of it by the end of this.

```javascript

const { userId, blogId } = req.params;

//name is coming from req.body
User.updateOne(
		{ _id: userId, 'blogs._id':blogId },
		{ $set: { 'blogs.$.name': name /* if you have more fields to update put them here */} },
		(err) => {/*do whatever you want here*/}
);

```

In order to update a blog post, we need to find the specific blog post we need to update and then we use the position operator **$** to get the blog post. **$set** is pretty much self-explanatory. 

```javascript

let { userId, blogId, commentId } = req.params;

User.findOneAndUpdate(
		{ _id: userId },
		{
			$set: {
				'blogs.$[i].comments.$[j].text': text,
				/*More fields go here */
			}
		},
		{
			arrayFilters: [ { 'i._id': blogId }, { 'j._id': commentId } ]
		}
	)
		.then(() => {
			/*  do whatever you want here  */
		})
		

```

Alright, lets take a deep breath here and understand the new term **arrayFilters**. You might think we could just put all the id's in the first parameter of the find method and then use the positional operator to get the current index.

However the positional operator only works 1 level deep, so we have to use arrayFilters.

`arrayFilters: [ { 'i._id': blogId }, { 'j._id': commentId } ]` is specifying what **i** and **j** are. You can imagine a 2 dimensional array: `array[10][15]`. In this 2 dimensional array `i = 10` and `j = 15`. 

`i._id: blogId` means to use the id field of where i is put. We put i in `blogs.$[i]` which means search through every blog to find the blogId and get the index and put it in **i**. So lets it found the blogId in 3rd element then we would have `blogs.$[2]`. The **j** field works the same way as i.

So using arrayFilter and our blogId and commentId, we have found the comment we want to update. Then we just use **$set** to update that comment. Cool! 



### Delete 


```javascript


const { userId, blogId } = req.params;

User.findByIdAndUpdate(
   { _id: userId }, 
     { $pull: 
         { blogs: 
            { _id: blogId } 
         } 
      }, (err) => {/*  do whatever you want here  */}
);

```

While creating we were pushing elements, now we are just pulling to remove the specified element (in this case a specific blog post denoted by blogId).

```javascript

let { userId, blogId, commentId } = req.params;

User.findOneAndUpdate(
		{ _id: userId, 'blogs._id': blogId },
		{
			$pull: {
				'blogs.$.comments': { _id: commentId }
			}
		},
		{ new: true },
		(err) => {/*Do whatever you want here*/}
	);

```

This should make sense if you understand the positional operator and the previous explanations.
Use `{new: true}` to return the updated document in findOneAndUpdate otherwise it will return the previous document.

As I mentioned earlier, if you have numerous subdocuments, our proposed solution will exceed the 16MB document limit of MongoDB.

In order to circumvent this limitation, I'll go through referencing documents instead of nesting them in part 2.

