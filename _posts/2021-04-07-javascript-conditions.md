---
Layout:
Title: "Javascript Conditionals"
Date: "2021-04-07"
---

# Javascript Conditionals

“If” statements: where if a condition is true it is used to specify execution for a block of code.
“Else” statements: where if the same condition is false it specifies the execution for a block of code.
“Else if” statements: this specifies a new test if the first condition is false.

## If Statement

As the most common type of conditional, the if statement only runs if the condition enclosed in parentheses () is truthy.

ex: 
if (10 > 5) {
      var outcome = "if block";
}
​
outcome;

OUTPUT

"if block"

The keyword if tells JavaScript to start the conditional statement.
(10 > 5) is the condition to test, which in this case is true — 10 is greater than 5.
The part contained inside curly braces {} is the block of code to run.
Because the condition passes, the variable outcome is assigned the value "if block"

## Else Statement

You can extend an if statement with an else statement, which adds another block to run when the if conditional doesn’t pass.

ex: 
if ("cat" === "dog") {
      var outcome = "if block";
} else {
      var outcome = "else block";
}
outcome;
OUTPUT
"else block"

In the example above, "cat" and "dog" are not equal, so the else block runs and the variable outcome gets the value "else block".

## Else If Statement

You can also extend an if statement with an else if statement, which adds another conditional with its own block.

ex: 
if (false) {
      var outcome = "if block";
} else if (true) {
      var outcome = "else if block";
} else {
      var outcome = "else block";
}

outcome;
OUTPUT
"else if block"

You can use multiple if else conditionals, but note that only the first else if block runs. JavaScript skips any remaining conditionals after it runs the first one that passes.