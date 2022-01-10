---
Layout:
Title: "Class Components"
Date: "2021-11-17"
---

## How to import class components from React.

We import the functional components from React by importing the following: import React from 'react';

## How to define class component


A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

If there is a constructor() function in your component, this function will be called when the component gets initiated.
The constructor function is where you initiate the component's properties.
The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).

The component also requires a render() method, this method returns HTML.

class MyComponent extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <div>
             
            </div>