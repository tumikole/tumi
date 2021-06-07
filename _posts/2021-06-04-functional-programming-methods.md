---
Layout:
Title: "Functional Programming: Methods"
Date: "2021-06-03"
---

## every() method

The every() method checks if all elements in an array pass a test (provided as a function). The every() method executes the function once for each element present in the array: If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)

ex:
let numbers = [1, 3, 5];
let result = numbers.every(function (e) {
    return e > 0;
});

## map() method

The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. This method does not change the original array.

## filter() method

The filter() method creates an array filled with all array elements that pass a test (provided as a function). Note: filter() does not execute the function for array elements without values. Note: filter() does not change the original array.

## The reduce() method 

Reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total).