---
Layout:
Title: "Global and Local scope"
Date: "2021-04-06"
---

# Variable Scope: Global vs. Local
##### google search 

A variable's scope is the range of the script where it is visible. Variables have either global or local scope. A global variable exists only once in a script, and is visible in every function. Modifications to it in one function are permanent and visible to all functions. Unless declared otherwise, all variables in a script are global. Global variables are useful for values that are relatively constant, or that many functions in the script must access, such as a session id.

A local variable, however, has a limited scope: it exists only within the block that it is declared in. Once that block ends, the variable is destroyed and its values lost. A local variable of the same name declared elsewhere is a different variable. A local variable can even exist multiple times simultaneously, if its block is entered again before it's exited - i.e. a recursive function call. Each call of the function will have a distinct local variable.

Local variables must be explicitly declared, either as parameters to a script function (here), or with the LOCAL statement (here). They are used to clearly pass parameters to functions, or as temporary "scratch space" for a function without the side effects of global variable modification.

A local variable with the same name as another in-scope variable will have precedence over the outer variable.

## Global Scope

global scope is the scope that contains, and is visible in, all other scopes. In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed.

## Local scope

is a characteristic of variables that makes them local (i.e., the variable name is only bound to its value within a scope which is not the global scope).