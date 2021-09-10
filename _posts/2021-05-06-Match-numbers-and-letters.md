---
Layout:
Title: "Regilar Expressions: Match numbers and letters"
Date: "2021-05-06"
---


we use the carot sign to match the first string and the dollar sign to match the last string.
We use \w (shortHand.) to match the alphabets. [A-Za-z0-9_](longHand.) This character class matches upper and lowercase letters plus numbers, this character class also includes the underscore character (_).

The shortcut to look for digit characters is \d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9],  which looks for a single character that is not a number between zero and nine.

When we check the username in database we use /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i

We use \s when checking for whites space.
Search for non-whitespace we use \S.

We use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters

## Specify Upper and Lower Number of Matches

Quantity specifiers are used with curly brackets.
You put two numbers between the curly brackets - for the lower and upper number of patterns.

ex: When change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/gi;
let result = ohRegex.test(ohStr);

## Specify Only the Lower Number of Matches

The lower number of patterns, keep the first number followed by a comma.

ex: When changing the regex haRegex to match the word Hazzah only when it has four or more letter z's.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/gi; 
let result = haRegex.test(haStr);

## Specify Exact Number of Matches

To specify a certain number of patterns, just have that one number between the curly brackets.

ex: When changing the regex timRegex to match the word Timber only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);

## Positive and Negative Lookahead

Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

### There are two kinds of lookaheads
#### positive lookahead 

Positive lookahead works just the same. q(?= u) matches a q that is followed by a u, without making the u part of the match. The positive lookahead construct is a pair of parentheses, with the opening parenthesis followed by a question mark and an equals sign.

#### negative lookahead

In this type of lookahead the regex engine searches for a particular element which may be a character or characters or a group after the item matched. If that particular element is not present then the regex declares the match as a match otherwise it simply rejects that match.
A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. 

##### Positive and Negative Lookahead

ex: Simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

ex: Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
