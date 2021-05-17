---
Layout:
Title: "Programming Paradigms"
Date: "2021-05-14"
---

## Introduction

Ever since mr Mandla gave us assignment, i have spended most of my days trying to understand programming paradigms.

## body

Programming paradigms are a way to classify programming languages based on their features. 

We have different types of paradigms but so far i have learned that we have two of them on freecodecamp which are Functional programming and Object Oriented Programming.

### Functional Programming

Is a coding style (how you write your code or organizing your code). Is kind of a mindset you can get into (a way of thinking about a problem or approaching a task).

ex: 

const map = (array, callback) => {
    const updated = [];

    for (let i = 0; i < array.length; i++) {
        const update = callback(array[i]);

        updated.push(update);
    }
    return updated;
}
const result = map([1, 2, 3], num => num + 2);

console.log(result)

### Object-Oriented Programming

Is a style of programming and not always a requirement of your application to make it work correctly. Are the ones that built inside themselves. They are strictly bound to an object instance or directly to a class.

ex:

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getName() {
        return this.name;
    };
    getSurname() {
        return this.surname;
    }
}

let Person1 = new Person("Samuel", "Ramollo");
let Person2 = new Person("Peter", "Kole");

console.log(Person1.getName());
console.log(Person1.getSurname());

## Conclusion

There are other programming paradigms except the two i have mentioned:
1. Declarative
2. Logical
3. Structured
4. Procedural.