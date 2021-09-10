---
Layout:
Title: "React Application state"
Date: "2021-08-25"
---

# 5 types of react application Statements

1. Data
2. Communication
3. Control 
4. Session
5. Location

## Data

Data state covers information which your application is temporarily stores. 
It easy to design a Redux store for our data, it is going to include a way to map a type and id to a received object. It will also include actions to update the store with received object.

## Communication

Communication state is the status of any not-yet-complete requests to other services.

This means that all of the following are communication state:

The type/selector for any Data you expect to receive
The type, selector and expected change of any operations you have requested on Data
The error messages for anything which didn’t go quite as planned

## Control

Refers to the state which the user has input into the app. Form inputs, selected items. It is generally specific to a single view.

## Session

When you have information which needs to be available application wide, but its shape is less well defined than your project’s schedule, it is probably Session state. Session state contains information about the human being which is currently using your application. This includes the obvious stuff – their user id, permissions, etc. But it also may include a user’s preferences for how the application should work.

## Location

location. state is a convenient way to pass state between components when you are navigating. It has one major downside, however, which is that the state only exists when navigating within your application. If a user follows a link to your website, there will be no state attached to the location.