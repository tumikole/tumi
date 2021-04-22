---
Layout:
Title: "Create Strings using template Literals"
Date: "2021-04-20"
---

## Create Strings using template Literals

### Introduction

##### (Google search)

Template literals or string literals are a new syntax in ES6. This is a quick introduction to string data types in JavaScript. We will create strings in JavaScript using the traditional syntax of single quotes and double-quotes. We will also look at how you can create strings using template literals in JavaScript. So stick around till the end of the article to get a complete understanding of the string literal syntax as well as the traditional syntax of declaring and working with JavaScript Strings.

### body

#### String Substitution

Template Strings can contain placeholders for string substitution using the ${ } syntax,

ex:
var name = "Brendan";
console.log(`Yo, ${name}!`);

They are also very useful for functions inside expressions:

ex:
function fn() { return "I am a result. Rarr"; }
console.log(`foo ${fn()} bar`);

#### Multiline Strings

Multiline strings in JavaScript have required hacky workarounds for some time. Current solutions for them require that strings either exist on a single line or be split into multiline strings using a \ (backslash) before each newline. 

ex:
var greeting = "Yo \
World";

#### Tagged Templates

So far, we've looked at using Template Strings for string substitution and for creating multiline strings. Another powerful feature they bring is tagged templates. Tagged Templates transform a Template String by placing a function name before the template string.

ex:
fn`Hello ${you}! You're looking ${adjective} today!`

### Conclusion

In this blogposp i've covered the template literals, expressions within template literals and finally tagged template literals.
