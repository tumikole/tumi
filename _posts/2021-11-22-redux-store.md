---
Layout:
Title: "Redux store"
Date: "2021-11-22"
---

# Redux store

Redux store is a globalised state. container which holds the application's state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer. Let us see how we can create a store using the createStore method from Redux.

## What is Redux store used for?

Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code.

## How do I get to Redux store?

It's simple to get access to the store inside a React component – no need to pass the store as a prop or import it, just use the connect function from React Redux, and supply a mapStateToProps function that pulls out the data you need. Then, inside the component, you can pass that data to a function that needs it.

## Is Redux a data store?

Redux stores are global states that store data you want to use across multiple components without drilling props at every level in your component tree. As an app gets large and complex, you might want to store large, bulky data inside your Redux store and access it inside a component.

## What problem does Redux solve?

### Plug Any Data Into Any Component

This is the problem that Redux solves. It gives components direct access to the data they need. Using the connect function that comes with Redux, you can plug any component into Redux's data store, and the component can pull out the data it requires.

## What will store will pass to the reducer?

The state parameter that gets passed to the reducer function has to be the current state of the application. In this case, we're calling that our initialState because it will be the first (and current) state and nothing will precede it.