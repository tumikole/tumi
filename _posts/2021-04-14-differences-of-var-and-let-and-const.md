---
Layout:
Title: "Differences between, var, let and const"
Date: "2021-04-14"
---

# Declaring JavaScript

## Var

Creating a variable in JavaScript is called declaring a variable. You declare a JavaScript variable with the var keyword: "var" After the declaration, the variable has no value, it has the value of undefined.

## let

let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.

## Const

const prevents the variable to be assigned to another value. Arrays and objects assigned to const variables can be mutated. However numbers, booleans and strings are immutable, so they cannot be mutated. 

# difference between the three Declarations

var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

All declaration are hoisted. Meanining you can move them to the top of a scope