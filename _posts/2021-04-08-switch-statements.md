---
Layout:
Title: "Switch Statements"
Date: "2021-04-08"
---

## switch statements

The switch statement executes a block of code depending on different cases. The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions. ... The switch statement is often used together with a break or a default keyword (or both).

It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway. Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

The JavaScript switch statement can contain return statements if it is present inside a function. The function will return the value in the switch statement and the code after the switch statement will not be executed.

You can use have both CASE statements as follows. Each break statement terminates the enclosing switch statement. Control flow continues with the first statement following the switch block.

If you want something returned, stick it in a function, and return the 'OK' from in the default case. No, the switch doesn't have a return value. What you see in the console is the return value of the statement inside the switch containing only a string literal value.

There can be any number of case statements within a switch. Each case is followed by the value to be compared to and after that a colon. ... A switch statement can have an optional default case, which must appear at the end of the switch. The default case can be used for performing a task when none of the cases is true.