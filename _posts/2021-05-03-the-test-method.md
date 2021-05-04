---
Layout:
Title: "Big five project"
Date: "2021-05-03"
---

Regular Expression: Using the test() method


A regular expression is a sequence of characters that define a search pattern for parsing and finding matches in a given string.

In basic terms, the /[a-zA-Z]/ regex means "match all strings that start with a letter".
If the char matches a value in the regex pattern and, therefore, is safely considered a letter from the alphabet, the test() method will return a true result.
If the char value does not match the regular expression, a false value will be returned.


ex:
function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}

This method will work for characters in the English language, but won't work for other languages like Greek or Latin. Also, this method won't work with letters that have accents and other special characters.

When you test the function, here is what the results would look like::

console.log(isCharacterALetter("t")) // true
console.log(isCharacterALetter("W")) // true
console.log(isCharacterALetter("5")) // false
console.log(isCharacterALetter("β")) // false
console.log(isCharacterALetter("Ф")) // false
console.log(isCharacterALetter("é")) // false