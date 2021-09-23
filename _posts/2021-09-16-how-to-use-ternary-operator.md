---
Layout:
Title: "How to use ternary operator"
Date: "2021-09-16"
---

# Introduction

Today i'm going to talk about how to use ternary operator. Ternary operator simplifies the if else statements. It takes three operants: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

# Body

When you want to execute a block of code if a particular test evaluates to true, you often use the if-else statement. For example, if age is greater than 16, then allow the person to drive can be coded as follows:

var age = 19;
var canDrive;

if (age > 16) {
    canDrive = 'yes';
} else {
    canDrive = 'no';
}

You can use the ternary operator as the shortcut for the if-else statement as follows:

var age = 19;
var canDrive = age > 16 ? 'yes' : 'no';

The code looks much cleaner by using ternary operator.

# Conclusion 

The best way to lear how to use ternary operator is by knowing how to use if else statement, and also how to know the ternary operator syntax (condition ? expression_1 : expression_2;)