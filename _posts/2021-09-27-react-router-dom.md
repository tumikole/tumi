---
Layout:
Title: "React-Router-Dom"
Date: "2021-09-27"
---

# Introduction

Today i'm going to talk bout the React-Router-Dom. 
React Router DOM facilitates component-based routing according to the needs of the app and platform.

# Body

We install React-Router-Dom by using the following node package manager: npm install react-router-dom.
Then we import BrowserRouter as Router, Switch, Route and Link.

## Router

Router wraps all the elements in the component.
It is a standard library for routing in React.
It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

## Route

The <Route> component is the most important component in React Router. It renders some UI if the current location matches the route's path. Ideally, a <Route> component should have a prop named path , and if the path name matches the current location, it gets rendered.
Is the conditionally shown component that renders some UI when its path matches the current URL.

## Link


To add the link in the menu, use the <NavLink /> component by react-router-dom . The NavLink component provides a declarative way to navigate around the application. It is similar to the Link component, except it can apply an active style to the link if it is active.

1. add links for navigation.
2. define the route of each page, meaning the URL path and the component that we want to load.
3. define a router which will check if the requested URL is defined in the routes, and if it is, return the component.