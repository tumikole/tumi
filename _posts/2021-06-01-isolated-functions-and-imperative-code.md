---
Layout:
Title: "Isolated functions and Imperative Code"
Date: "2021-06-01"
---

## Isolated functions

An isolated function is a function within which specific rules apply when accessing mutable state. An isolated function can access mutable state that is passed as a parameter.

pure function with example?

A function is called pure function if it always returns the same result for same argument values and it has no side effects like modifying an argument (or global variable) or outputting something. ... Examples of pure functions are strlen(), pow(), sqrt() etc.

## Imperative Code

is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

open() 

opens a new browser window, or a new tab, depending on your browser settings and the parameter values.

close() method 

closes the current window.

ex:
function openWin() {
  myWindow = window.open("https://www.w3schools.com", "_blank", "width=200, height=100");
}

function closeWin() {
  myWindow.close();
}

join()

The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

ex: Whenconst arr = ["apple", "banana", "orange"];
const joinedArray = arr.join("---");
console.log(joinedArray);