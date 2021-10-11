---
Layout:
Title: "Return the longest string"
Date: "2021-09-30"
---

# Introoduction

Today im going to write about katas that we have been doing with Moral. Using different types of methods.

# Body

## Getting the longest string in an array of names

### First i used sort() method to get the longest string

I declared a variable called names then assign it to an array of names.

const names = ["Tumi", "Tumisang", "Sam", "Samuel", "Sammy"]

Then create a function that that returns the longest string in an array and pass in name as argument/parameter.

const longesStringCount = (name) => {

    return longestString

}

Then i declaired a variable called 'longesString' inside a function and assign it to name.sort((a ,b) => b.length - a.length);

The aim is to sort the strings from the longest to the smallest.

Then return longestString index 0 whitch it the first index in the sorted array.

return longestString[o]

}

Lastly called my function and passed in names

return longestString[o]

}

console.log(longesStringCount(names))

### Secondly I used forloop.

Using the same function above, inside the function i declared a variable called longestString and assigned it to 0(zero).

let longestString = 0

and declared onother variable called longestName and assigned to an empty string.

let longestString = 0;
let longestName = "";

I create a forloop that will iterate over names.

for (i in name) {
if (name[i].length > nameLength) {
longestName = name[i];
}
}

Then i returnd the longestName.

