---
Layout:
Title: "Declaring state in React"
Date: "2021-09-02"
---

## How do you declare a state in React?

We import the useState Hook from React. It lets us keep local state in a function component.
Inside the component, we declare a new state variable by calling the useState Hook. It returns a pair of values, to which we give names.
When the user clicks, we call setExample with a new value.

In a class, we initialize the state by setting this.state in the constructor.

ex: class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  In a function component, we have no this, so we can’t assign or read this.state. Instead, we call the useState Hook directly inside our component

  import React, { useState } from 'react';

function Example() {
  const [example, setExample] = useState();

## What does calling useState do?
  
It declares a state variable. This is a way to preserve some values between the function calls useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables disappear when the function exits but state variables are preserved by React.

## What do we pass to useState as an argument?

The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. If we wanted to store two different values in state, we would call useState() twice.

## What does useState return?

It returns a pair of values: the current state and a function that updates it. This is why we write const [example, setExample] = useState(). This is similar to this.state.example and this.setState in a class, except you get them in a pair.