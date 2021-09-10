---
Layout:
Title: "React Redux"
Date: "2021-08-30"
---

# React Redux

## What is React Redux?

It is the official react user interface binding layer of redux. It lets your components read data from the redux store and dispatch actions to the store to update state.

## How do you install react redux

On an existing app, depending on the operating system you use. Just because im using ubuntu/linux,i use npm install react-redux.

Also you need to create a Provider component and wrap all your react.DOM component in the index.js file. Also you need to import provider to the index.js 
//import { Provider } from 'react-redux'//

### Hooks

React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store.

useSelector: reads a value from the store state and subscribes to updates.
useDispatch: returns the store's dispatch method to let you dispatch actions.

## What is React Redux used for?

Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.