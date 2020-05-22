---
path: "/react-for-beginners-part-2"
date: "2020-03-23"
title: "React for beginners Part 2"
imageUrl: "https://images.unsplash.com/photo-1584968635701-20f69ef0fb93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
author: "Muhammad Moiz"
---

### Revisiting state

Previously, we created a clicked variable and used it to show and hide some dom elements. We only used it as a boolean but state can hold different types of data e.g string, object, array etc.

React does not want us to mutate state which means we have to create a copy of the previous state, add our change to this copy and then update the state. 

Usually we want to hide/show elements or display data. For hiding/showing we use booleans and for data we use arrays, array of objects or nested objects. 

What do I mean by displaying data? I want you to think of youtube's homepage where we have a list of videos for us to choose. The data for the list of videos could look like this:

```javascript 
   [{
      video_image: 'www.clickbaitImage.jpg',
      video_title: 'Clickbait title',
      channel_name: 'Clickbaiter',
      video_views: '900,000',
      posted_on: '2 days ago'
   },
   {
      video_image: 'www.foodImage2.jpg',
      video_title: 'How to cook rice',
      channel_name: 'RiceCooker',
      video_views: '534,567',
      posted_on: '5 days ago'
   },
   ]

```

We want to convert this data to youtube's list of videos on the frontend. First we have to store this data in a variable(state).

```javascript
const [videos, setVideos] = useState(
     [{
      video_image: 'www.clickbaitImage.jpg',
      video_title: 'Clickbait title',
      channel_name: 'Clickbaiter',
      video_views: '900,000',
      posted_on: '2 days ago'
   },
   {
      video_image: 'www.foodImage2.jpg',
      video_title: 'How to cook rice',
      channel_name: 'RiceCooker',
      video_views: '534,567',
      posted_on: '5 days ago'
   },
   ]
)

```

We have set the default value of 'videos' to this list of videos which is an array of objects. Before we can convert this data to a list of videos on the frontend, we need to take a detour to the concept of components. 

### Components

Components are how we reuse code in react. In normal programming, whenever we want to reuse a piece of code multiple times, we put that code inside a function and call that function multiple times. In react whenever we want to reuse html(jsx), we put that code inside a component. A component is simply a function which contains our html and javascript (most of the times especially with hooks).

Some components just contain html, we call them presentational components. Some components contain both javascript and html. It is harder to reuse components that contain both javascript and html.

