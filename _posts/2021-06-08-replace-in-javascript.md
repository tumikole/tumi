---
Layout:
Title: "Seartch and Replace in JavaScript"
Date: "2021-06-08"
---


## How do you do a Find and Replace in JavaScript?

### To make the method replace() replace all occurrences of the pattern you have to enable the global flag on the regular expression

Append g after at the end of regular expression literal: /search/g.
Or when using a regular expression constructor, add 'g' to the second argument: new RegExp('search', 'g')

## How do you replace a letter in a string JavaScript?

You can use the JavaScript replace() method to replace the occurrence of any character in a string. However, the replace() will only replace the first occurrence of the specified character. To replace all the occurrence you can use the global ( g ) modifier.

## Does string replace mutate Java?

The String replace() method

Returns a new string without mutating the original one