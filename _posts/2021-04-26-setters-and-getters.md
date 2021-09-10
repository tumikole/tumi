---
Layout:
Title: "Setters and Getters"
Date: "2021-04-26"
---

In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords: get - to define a getter method to get the property value. set - to define a setter method to set the property value.

## Getters

Getters give you a way to define a property of an object, but they do not calculate the property's value until it is accessed. A getter defers the cost of calculating the value until the value is needed.

## Setter

Setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property. ... It must not appear in an object literal with another set or with a data entry for the same property.

How it works.
First, change the access modifiers of the age , firstName , and lastName properties from public to private .
Second, change the property age to _age .
Third, create getter and setter methods for the _age property.
