---
Layout:
Title: "Parameters in a function"
Date: "2021-04-01"
---

# Parameters in a function

A Parameter is the symbolic name for "data" that goes into a function. There are two ways to pass parameters: Pass by Value, Pass by Reference.

### Pass by Value

Pass by Value, means that a copy of the data is made and stored by way of the name of the parameter. Any changes to the parameter have NO affect on data in the calling function.

## Pass by Reference

A reference parameter "refers" to the original data in the calling function. Thus any changes made to the parameter are ALSO MADE TO THE ORIGINAL variable.

There are two ways to make a pass by reference parameter:

### ARRAYS

Arrays are always pass by reference in C. Any change made to the parameter containing the array will change the value of the original array.

### The ampersand used in the function prototype.

function ( & parameter_name )

To make a normal parameter into a pass by reference parameter, we use the "& param" notation. The ampersand (&) is the syntax to tell C that any changes made to the parameter also modify the original variable containing the data.