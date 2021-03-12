---
Layout:
Title: "Regular Expressions"
Date: "2021-03-12"
---

## REGULAR EXPRESSIONS

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
Regular expressions are special strings that represent a search pattern. Also known as “regex” or “regexp”, they help programmers match, search, and replace text. To match many different words with your regular expression; we use the | symbol.

You can ignore the case while matching by using (i flag) after the ignored string

Using the match() method, you can extract parts of a string that match with your regular expression.
-Change your regex to detect the word
-match() method on the string

To find morethan the first match, you use the g flag.

Wild card match we use /./ to match all the words, and the periot or dot should be on the right  position.
eg: let huRegex = /regex/ then the solution of using the wild card is = /hu./ and if unRegex = /regex/ therefore it will be = /.un/


MAtching numbers and letters we use the hyphen 