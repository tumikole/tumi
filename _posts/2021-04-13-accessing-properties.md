---
Layout:
Title: ""
Date: "2021-04-13"
---

## Accessing Properties

JavaScript provides two notations for accessing object properties. The first, and most common, is known as dot notation. Under dot notation, a property is accessed by giving the host object’s name, followed by a period (or dot), followed by the property name. 

object.foo = object.foo + 1;

The alternate syntax for accessing object properties is known as bracket notation. In bracket notation, the object name is followed by a set of square brackets. Inside the square brackets, the property name is specified as a string.

object["foo"] = object["foo"] + 1;

Bracket notation is more expressive than dot notation because it allows a variable to specify all or part of the property name. This is possible because the JavaScript interpreter automatically converts the expression within the square brackets to a string, and then retrieves the corresponding property.

var f = "f";

object[f + "oo"] = "bar";

