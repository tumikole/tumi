---
Layout:
Title: "High Order Functions"
Date: "2021-06-02"
---

# Use Higher-Order Functions.

Higher order functions can help you to step up your JavaScript game by making your code more declarative. That is, short, simple, and readable.

A Higher Order Function is any function that returns a function when executed, takes a function as one or more of its arguments, or both. If you have used any of the Array methods like map or filter, or passed a callback function to jQuery’s $.get, you have already worked with Higher Order Functions.

## body

When you use Array.map, you provide a function as its only argument, which it applies to every element contained in the array.

ex:
var arr = [ 1, 2, 3 ];

var arrDoubled = arr.map(function(num) {
  return num * 2;
});

console.log(arrDoubled); // [ 2, 4, 6 ]

Higher order functions can also return a function. For example, you can make a function called multiplyBy that takes a number and returns a function that multiplies another number you provide by the first number provided. You can use this approach to create a multiplyByTwo function to pass to Array.map. This will give you the same result you saw above.

ex:
function multiplyBy(num1) {
  return function(num2) {
    return num1 * num2;
  }
}

var multiplyByTwo = multiplyBy(2);

var arr = [ 1, 2, 3 ];

var arrDoubled = arr.map(multiplyByTwo);

console.log(arrDoubled); // [ 2, 4, 6 ]

### What does Filter Method do in JavaScript?

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

### How do you use the map method?

The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. Note: map() does not execute the function for array elements without values.