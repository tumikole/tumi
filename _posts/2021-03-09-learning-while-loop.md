---
Layout:
Title: ""Learning while loop
Date: "2021-03-08"
---

# While Loops

can be repeated multiple time because it runs while a specified condition is true and stops once that condition is no longer true.

Use a iterator variable such as i in your condition
var i = 5;
while (i  >= 0) {}

Loops that are declared with three optional expressions separated by semicolons.
eg: (a; b; c),

(Freecodecamp) The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute.

Loop can also count backwards, so long as we can define the right conditions.

#### The structure of a for loop:

for ([initialization]; [condition]; [final-expression]) statement:

The [initialization] part is executed only once (the first time).
The [condition] is checked on every iteration.
The [final-expression] is executed along the statement if [condition] resolves to true.

#### How accumulators work:

var x += i

The variable x is going to act as the accumulator.
The variable i is the one which value will be stored (and accumulated) inside x
The expression += is an just abreviation of x = x + i

### Do while loop(Freecodecamp)

It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.

Do...While loops makes sure that the code is executed at least once, and after the execution, if the condition inside the while() is true, it continues with the loop, otherwise it stop.