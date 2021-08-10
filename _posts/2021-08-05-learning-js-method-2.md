---
Layout:
Title: "Javascript methods 'Recap2'"
Date: "2021-08-05"
---

## join( )

This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

const arr = ["t", "u", "m", "i", "s", "a", "n", "g"];

console.log(arr.join(""))

## reduce( )

This method applies a function against an accumulator and each element in the array to reduce it to a single value.

const arr = [1, 2, 3, 4, 5, 6];

const reduced = arr.reduce((total, current) => total + current);

## indexOf( )

This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.

const arr = ["tumisang", "samuel", "ramollo"];

const indexFinder = aar.indexOf("ramollo");

##  slice( )

This method returns a new array with specified start to end elements.

const arr = ["t", "u", "m", "i", "s", "a", "n", "g"];

const sliced = arr.slice(2, 4);


## push( )

This method adds one or more elements to the end of array and returns the new length of the array.

const arr = [1, 2, 3, 4, 5, 6]

const newArr = arr.push(7);