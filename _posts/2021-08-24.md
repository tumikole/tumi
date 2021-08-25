---
Layout:
Title: "Redux 'Recap'"
Date: "2021-08-24"
---

# Redux 

## Introduction


## Body

Redux is making use of a redux store, such that the entire application is handled by one state object.

### Redux core principles

1. The state of your whole application is stored in an object tree within a single store that act as the single source of truth for your app.
2. Ensure the application state is read-only and requires changes to be made by emitting a descriptive action.
3. To specify how the state tree is transformed by actions, you write pure reducer functions.

The entire state of your application is centralized in one location.
So no more props drilling between components and sub components.
No need to send props to child components, or callback functions to parent components.
With Redux you state is now centralized in one location and each component has direct access to the state.
When using Redux, the centralized store is now the only place where state will be change in your application.
State can be change in your store by dispatching different actions. For example an action to add, another action to update, another action to delete

### How to install/setup React Redux

First you install npm react toolkit in the react app. Then create your App redux store. Once the store is created, we can make it available to our React components by putting a React-Redux Provider around our application in src/index.js.