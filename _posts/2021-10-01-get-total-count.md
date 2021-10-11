---
Layout:
Title: "Get total count"
Date: "2021-10-01"
---

# Introduction

Today i'm going to talk another kata that returns the total count of items/strings in an array.

# Body

First i declare a variable assigned to array of names

const names = ["Tumisang", "Samuel", "Samuel", "Samuel", "Praise"];

I created a function called getTotalCount and passed two parameters(arr and name) that returns the value of the total count

const getTotalCount = (arr, name) => {

return value
}

Then i declare a variable called value and assign it to arr.filter((item) => item === name)

The return value.length


//Full code example//

const names = ["Tumisang", "Samuel", "Samuel", "Samuel", "Praise"];

const getTotalCount = (arr, name) => {
const value = arr.filter((item) => item === name);
return value.length;

};
console.log(getTotalCount(names, "Samuel"));



//Full code example When using the forloop//

const getTotalCount1 = (arr, name) => {
let value = 0;

for (i in arr) {
if (arr[i] === name) {
value = value + 1;
}
}

return value;
};
console.log(getTotalCount1(names, "Samuel"));



// THe console will print 3(wich means Samuel in the array repeat 3 times)
