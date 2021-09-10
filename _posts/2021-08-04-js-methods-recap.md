---
Layout:
Title: "Javascript methods 'Recap'"
Date: "2021-08-04"
---

## map( )

This method creates a new array with the results of calling a provided function on every element in this array.

const arr = [1, 2, 3, 4, 5, 6];

const mapped = arr.map(element => element  + 30);

console.log(mapped);

## filter( )

This method creates a new array with only elements that passes the condition inside the provided function.

const arr = [1, 2, 3, 4, 5, 6];

const filtered = arr.filter(element => element  === 2 || === 4);

console.log(filtered);

## sort( )

This method is used to arrange/sort array’s elements either in ascending or descending order.

const arr = [2, 1, 3, 5, 4, 6];
arr.sort();

## forEach( )

This method helps to loop over array by executing a provided callback function for each element in an array.
const arr = [1, 2, 3]

arr.forEach(element => element {
    console.log(element)
})

## concat( )

This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

const arr = ["a", "b", "c", "d"];
const arr2 = ["e", "f", "g", "f"];

## every( )

This method checks every element in the array that passes the condition, returning true or false as appropriate.

const arr = [2, 1, 3, 5, 4, 6];

const greaterFive  = arr.every(num => num  > 5);
console.log(greaterFive);