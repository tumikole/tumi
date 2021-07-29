---
Layout:
Title: "React and redux"
Date: "2021-06-30"
---

# React and Redux


For redux to work on react app, you need to install react-redux npm.
You will also need to set up a redux store in your app. Project.
React redux provides a pair of custom react hook that allow your react components to interact with the redux store.

UseSelector reads a value from the store  state and subscribes to updates, while useDispatch returns the stores  dispatch method to let you dispatch actions.

import { useSelector, useDispatch } from 'react-redux'

### The purpose of Redux.

Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.

### The purpose of React.


React is easy to grasp for developers who are familiar with Javascript. So if you have a team of developers that are very well-versed with Javascript, Reactjs should be your best bet. However, even if developers don't know Javascript, React can be the right place to start

### Is react backend?

Using node.js, express and Mongo DB as the best backend for react.tThey are commonly used together in web development.

### Is redux backend?

Redux is just JavaScript, it can also be used on the server side (backend). ... One good example of using Redux on the backend is with multiplayer games that run within a browser and need to store their state on the server to ensure all players have the same view of the game.
