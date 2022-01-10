---
Layout:
Title: "Functional Components"
Date: "2021-11-16"
---

# Introduction

Today i'm going to talk about the Functional Components. How the functional components are defined and how the functional components are imported to react.

# Body 

## Why we use functional components

One of the main benefits of functional components is that they make your code easier to read and understand. Functional components are easy to test. Since functional components offer no state or lifecycle methods, you would think that this would allow the internals of React to avoid unnecessary overhead such as lifecycle events. Functional components are easy to debug. Functional components are more reusable



## How to import functional components from React.

We import the functional components from React by importing the following: import React {useState} from 'react';

## How to define functional component

First step is by defining the name of your function/component. Similar to how we denine javascript functions, we define the name of the function the same to react. Then we create our state by naming our state name, then setState for updating our state : [stateName, setState] = useState=().

Example

function app() {
    return (
        <div>   
        </div>
    );
}
