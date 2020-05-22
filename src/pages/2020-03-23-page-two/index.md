---
path: "/react-for-beginners-part-1"
date: "2020-03-23"
title: "React for beginners Part 1"
imageUrl: "https://images.unsplash.com/photo-1584968635701-20f69ef0fb93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
author: "Muhammad Moiz"
---

Pre-requisites 

- Map function (this is how we iterate over data)
- Spread operator
- Some programming knowledge (basic functions, loops, helps if you know classes)
- Basic html and css

You don't need to know everything stated above but you should have some basic html, css and programming familiarity.

## Introduction

React is a UI library written in javascript. Why should you use react when you can simply use HTML,CSS and Javascript to create your website? Well, you don't need to use it for a simple landing page or portfolio. There are two types of websites on the web:

1. Websites whose main goal is to give information such as portfolios, business sites etc. Portfolio's   give information to employers, business sites give information to customers.
2. Websites that allow you to add content: Facebook, Instagram, Evernote and so on.

All modern front end frameworks including React excel on the latter. These sites are often called web apps.

Q. I can use jquery to create web apps. Why should I learn react?
There are two reasons why you might consider react:

1. It allows you to create SPA's (Single Page Applications)
2. It is faster than jquery

Q. What are SPA's ?
Ans. A single-page application is a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages. The goal is faster transitions that make the website feel more like a native app.

Q. Why is react faster?
Ans. Since JQuery deals with DOM: 
> The idea is that DOM elements carry around too much unnecessary data, and the virtual DOM abstracts the relevant parts, allowing for faster performance. In React, you modify the virtual DOM, which it then compares to the existing DOM elements and makes the necessary changes.
> - Steven Salka

Traditional dom manipulation might look like this:

```javascript

const list = document.querySelector('ul');
const button = document.querySelector('button');

button.onclick = function() {
    //This code is adding some children to a ul tag
    //get the elements from the dom
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    
    // update them one by one
    listItem.appendChild(listText);
    listText.textContent = "Add";
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

}

```
The code above changes what the dom(html) contains whenever a particular button is clicked:

Before click:

```html 
   <ul>

   </ul>
```

After click

```html
  <ul>
    <li><span>Add</span></li>
    <li><button>Delete</button></li>
  </ul>
```

We can do the same thing in react. However we have to think a little differently (maybe even more naturally). Instead of adding and removing the children, we can hide or show them. We can represent this logic with a boolean: lets call it "clicked". 

The code below will not work if you try it since I've intentionally left some details out
```javascript
//declare a global variable
let clicked = false;

// this is called whenever a button is clicked
// we will go over the specifics later
function onClick() {
    clicked = true
}
   
// These are some observations for the code below:
//1. There are some {} braces inside the ul
//2. We have both html and javascript inside this function
//3. There is a ? and a : inside the braces
function render(){
   return(
   <ul>
     { clicked === true ? 
            <li><span>Add</span></li>
            <li><button>Delete</button></li>
             : ""
     }
   </ul>
   )}
``` 

1.   There are some braces inside the ul?\
     Whenever we need to put javascript inside our html, we use {} and write our 
     javascript inside those braces.

2.   We have both javascript and html inside our function.\
     This is called the jsx syntax which is parsed by react.

3.   There is a ? and : inside the braces.\
     This is called the ternary condition which is a shorter way of writing an if/else statement. Anything after the ? happens when the condition is true and anything after the : happens when the condition is false. So in the code above: If __clicked__ is true then show the children otherwise show an empty string. 

It is important to realize that even though the logic of our code says that we are hiding or showing the elements, react is adding and removing elements for us underneath the hood. 


## The parallels between functions in React and Javascript 

When I was learning react, I was really scared of the terms: __state__ and __props__ and how frequently they were thrown around. I thought that __state__ had something to do with state space in mathematics.

__State__ is where you put your variables in react.In the previous example we created a variable called __clicked__ to determine whether to hide or show the children of a ul tag. Since the clicked variable is changing, we call it the state of our application. __Props__ on the other hand is state that is passed down to children components. Don't worry about children components for now, the important thing to remember is that state is equivalent to a variable.

### Javascript

```javascript

let clicked = false;

function onClick() {
    clicked = true;
}

```

### React

```javascript
import React, {useState} from 'react

function Component() {
    // the false here specifies what the default
    // value of the variable(state)
    // should be
    const array = useState(false);
    // This is a variable
    // that is false right now
    const clicked = array[0];
    // This is a function that will change the variable(state)
    const setClicked = array[1];

    function onClick(){
        //clicked will be true after this call
        setClicked(true);
    }

}

```
The function useState returns an array. The first element of the array is a state variable and the second element is a function.  

```javascript

const array = useState(false);
const clicked = array[0];
const setClicked = array[1];

```

can be shortened to

```javascript
const [clicked, setClicked] = useState(false)

```

Lets re-write the ul children example that we saw previously.

```javascript
import React, {useState} from 'react

function Component() {
    
    const [clicked,setClicked] = useState(false);

    function handleClick(){
        setClicked(true);
    }

    function render(){
       return(
          <ul>
            { clicked === true ? 
              <li><span>Add</span></li>
              <li><button>Delete</button></li>
             : ""
            }
         </ul>
         // set the onClick attribute
         // to the function handleClick
         // remember to camelCase "onClick"
         <button onClick={handleClick}>
      )}

}

```

The button tag has an onClick attribute that is triggered whenever that button is clicked. We want to trigger a function __handleClick__ upon click. Notice how we don't say handleClick(), doing this would cause the handleClick function to be invoked whenever we go to our website. Removing the braces allows react to defer the invocation of the handleClick function.

In the next part, we will discuss state and props in more detail. We will also talk out about components
which is how we add reusability and avoid code duplication. 








