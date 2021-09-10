---
Layout:
Title: "prototype vs hasOwnProperty"
Date: "2021-05-18"
---

#### (google search)

## What is JavaScript prototype?

The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.

## Why prototype is used in JavaScript?

Prototypes allow you to easily define methods to all instances of a particular object. ... The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it.

## How do you write a prototype in JavaScript?

JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.

## Has own property?

hasOwnProperty() The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

## How do you check if an object has a property in JavaScript?

The first way is to invoke object. hasOwnProperty(propName) . The method returns true if the propName exists inside object , and false otherwise. hasOwnProperty() searches only within the own properties of the object.