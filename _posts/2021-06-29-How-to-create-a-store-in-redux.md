---
Layout:
Title: "How to create a store in Redux"
Date: "2021-06-29"
---

# How do I create a store in Redux

createStore(reducer, [preloadedState], [enhancer]) Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.

## Can I create multiple store in Redux

As with several other questions, it is possible to create multiple distinct Redux stores in a page, but the intended pattern is to have only a single store. ... Isolating a Redux app as a component in a bigger application, in which case you might want to create a store per root component instance.

## What are the important methods of store

### A store is not a class. It's just an object with a few methods on it.


#### Store Methods

1. getState()
2. dispatch(action)
3. subscribe(listener)
4. replaceReducer(nextReducer)

# Get State from the Redux Store

## How do I access a state from Redux store

It's simple to get access to the store inside a React component, no need to pass the store as a prop or import it, just use the connect function from React Redux, and supply a mapStateToProps function that pulls out the data you need. Then inside the component, you can pass that data to a function that needs it.

## Where is redux state stored

### Memory

The state in Redux is stored in memory, in the Redux store. This means that, if you refresh the page, that state gets wiped out. The state in redux is just a variable that persists in memory because it is referenced (via closure) by all redux functions.
