---
Layout:
Title: "Learning React"
Date: "2021-11-15"
---

# Introduction

After completing the TCG website, I thought to myself that just before i jump to backend development i should go and do recap on react. I have realised that i dont understand react the way i thought i did so i went back to react to re-do react. So i was busy doing research on google.

# Body

## How to build a react application. 

The first thing is to create a react app by using command npx create-react-app {name of the app}. The react  app will be created and the node modules, public folder, source folder, gitignore file, package-lock.json file and also package.jason file will be created.

So in react we use JSX instead of HTML. JSX stand for Javascript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React within JavaScript code. Instead of separating the markup and logic in separated files, React uses components for this purpose. It helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

## What is to render in React?

React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.

Rendering is a process that is triggered by a change of state in some component of your application, when a state change occurs React.

1. It will collect from the root of your App all the components that requested a re-render because their state or their props changed.
2. It will invoke these components.

Render is what is actually being called in the component, return is what is "rendered". You can log, set variables, conditional rendering etc in the render, but return is what is actually output render().

## What is a component in React?

Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.