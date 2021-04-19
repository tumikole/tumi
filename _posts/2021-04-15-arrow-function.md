---
Layout:
Title: "Arrow Function"
Date: "2021-04-15"
---

## What is Arrow function?

By using arrow functions, you can write concise one-liners with implicit return and finally forget about old-time hacks to solve the binding of the this keyword in JavaScript. Arrow functions also work great with array methods like . map() , . sort() , .

## How do I write an arrow function in TypeScript?

Example: Parameterless Arrow Function.

let sum = (x: number, y: number) => x + y; sum(3, 4); //returns 7.

## Why do we use arrow functions?

Arrow functions intend to fix the problem where we need to access a property of this inside a callback. There are already several ways to do that: One could assign this to a variable, use bind , or use the third argument available on the Array aggregate methods.

## What is difference between Arrow function and normal function?

Regular functions created using function declarations or expressions are constructible and callable. ... However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.