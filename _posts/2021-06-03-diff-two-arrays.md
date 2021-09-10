---
Layout:
Title: "Diff Two Arrays javascript"
Date: "2021-06-03"
---

# Diff Two Arrays in javascript

## How do you find the difference between two arrays?

Using Array.prototype.filter() function. You can use the filter() method to find the elements of the first array which are not in the second array.

## How do I compare two JavaScript arrays?

const a = [1, 2, 3]; const b = [1, 2, 3]; a === b; // false.
const equals = (a, b) => JSON. stringify(a) === JSON. ...
const str = 'a'; const strObj = new String('a'); str === strObj; // false equals([str], [strObj]); // true, should be false null === undefined; // false equals([null], [undefined]); // true, should be false.