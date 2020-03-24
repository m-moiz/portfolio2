---
path: "/react-for-beginners"
date: "2020-03-23"
title: "React for beginners"
imageUrl: "https://images.unsplash.com/photo-1584968635701-20f69ef0fb93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
author: "Muhammad Moiz"
---

Pre-requisites 

- Map function (this is how we iterate over data)
- Spread operator
- Some programming knowledge (basic functions, loops, helps if you know classes)
- Basic html and css

You don't need to know everything stated above but you should have some basic html, css and programming familiarity.

### The parallels between functions in React and Javascript 

When I was learning react, I was really scared of the terms: __state__ and __props__ and how frequently they were thrown around. I thought that __state__ had something to do with state space in mathematics but in react: __state__ is quite simple.

__State__ is where you put your variables in react. More precisely, it is an object in which you put your variables. Whenever you create a function in javascript, you create your local variables inside the function and then you do something with those variables. In react, you use the local variables(state) and use them inside your html(jsx)

# Javascript

```javascript

function doSomething() {
    let cat = 'Kitten';
    console.log(cat);
}

```

# React

```javascript

function doSomething() {
    state = {  // An object with a cat property
        cat: 'Kitten'
    }
    
    // return some html(jsx). Note the curly braces, they are used whenever we want to insert javascript into our html(jsx). Since state is an object, we can access the cat property with the dot notation
    return (
        <div>{state.cat}</div> 
    )
}

```

Now, the react code above is not completely valid, we need to make a few alterations to it. We simply need to change the function to a class, put state inside the class constructor and put our html(jsx) in the render function. 

```javascript

import React, {Component} from 'react'

// Component is a class created by the react team.
// By using the extends keyword, we add functionality like the render method used below to our class.
class DoSomething extends Component { 

    // the constructor initializes our class whenever we use the new keyword. e.g Dog doggo = new Dog();
    // We won't be initializing our class, React will do that for us
    constructor(props) {
        // super calls the parents constructor, it is not really that important to know. 
        super(props);

        // Look at this class and set this class's state object to contains cat property. 
        this.state = {
           cat: 'Kitten'
        }
    }
    
    //render method provided by the Component class
    render() {
        return (
           <div>{this.state.cat}</div>
        )  
    }
   
}

```

How do change the state object? In a normal function in javascript, we can change our variables by reassigning them. The component class we are extending from provides a __setState__ method to change our state.

# Javascript

```javascript

function doSomething() {
    let cat = 'Kitten';
    cat = 'Fluffball';
}

```

# React

```javascript

class DoSomething extends Component { 
   
    constructor(props) {
        super(props);

        this.state = {
           cat: 'Kitten'
        }

        this.setState({cat: 'Fluffball'})
    }
    
    render() {
        return (
           <div>{this.state.cat}</div>
        )  
    }
   
}

```

We can make errors like calling this.setState inside the render function which will keep changing the variable(state) everytime the component renders and our app will crash.

We usually want to change something (state) based on a user action, such as when a user clicks a button or enters an input into a form element. Html tags contain methods such as onclick or onchange to respond to events, however since React uses JSX which looks very similar to HTML, the method names have a camelCase style. onclick in html is onClick, onchange in html is onChange in jsx and so forth for every other method.









