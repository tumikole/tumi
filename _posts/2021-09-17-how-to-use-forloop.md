---
Layout:
Title: "How to use for in of"
Date: "2021-09-17"
---

# Introduction

### Differences between for(..in) and for(..of)


Both for in and for of are looping constructs which are used to iterate over data structures. The only difference between them is the entities they iterate over: for in iterates over all enumerable property keys of an object. for of iterates over the values of an iterable object.

# Body


#### for (in) statement 

Loops through the enumerable properties of an object. The loop will iterate over all enumerable properties of the object itself and those the object inherits from its constructor’s prototype.

Syntax
for (variable in object)
  statement

  Ex: var person = {
            firstName: "GeeksforGeeks",
            lastName: "<br>A Computer Science Portal for Geeks ",
            rank: 43
        };
        var userId = "";
        var i;
        for (i in person) {
            userId += person[i];
        }


#### for (of) statement 

Lets you loop over the data structures that are iterable such as Arrays, Strings, Maps, Node Lists, and more. It calls a custom iteration hook with instructions to execute on the value of each property of the object.

Syntax
for (variable of iterable) {
  statement
}

Ex: 

var text = [
            "GeeksforGeeks",
            " A Computer Science Portal for Geeks ", 
            "43"
            ];
        var userId = "";
        var i;
        for (i of text) {
        userId+=i;
        }