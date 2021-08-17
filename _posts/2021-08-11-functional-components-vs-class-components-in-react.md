---
Layout:
Title: "Functional Components vs Class Components in React"
Date: "2021-08-11"
---

There are two ways of writing a React component. One uses a function and the other uses a class. Recently functional components are becoming more and more popular.

## Rendering JSX

The difference is the syntax. Functional component is just a plain JavaScript function that returns JSX. A class component is a JavaScript class that extends React.Component which has a render method.

functional component is a function that returns JSX

When defining a class component, you have to make a class that extends React.Component. The JSX to render will be returned inside the render method.

## Passing props

Inside a functional component, we are passing props as an argument of the function. 

Since it is a class, you need to use this to refer to props.

## Handling state

### Handling state in functional components

To use state variables in a functional component, we need to use useState Hook, which takes an argument of initial state.

As useState returns the current state and a function that updates it, we are destructuring the array this way.

### Handling state in class components

The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

Without implementing the constructor and calling super(props), all the state variables that you are trying to use will be undefined. So let’s define the constructor first. Inside the constructor, you will make a state object with a state key and initial value. And inside JSX, we use this.state.count to access the value of the state key we defined in the constructor to display the count. Setter is pretty much the same, just different syntax.