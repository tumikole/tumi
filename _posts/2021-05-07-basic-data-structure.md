---
Layout:
Title: "Basic Data Structure"
Date: "2021-05-06"
---
## Why would you use an array to store data

It is much simpler to keep all the related data under one name. We do this by using an array. By using this array, all 10 data items can be stored in one place. Each 'box' in an array is referred to as an element.

## How do you store multiple variables in an array

The original way is to use the array keyword and then a pair of parentheses after that. And between the parentheses, you create a comma separated list of all the items that you want in the array. You can put anything in an array. You can put numbers, you can put strings, you can put other things.

## Access an Array's Contents Using Bracket Notation

Remember the arrays index begins at 0 so the postion of b will be located in myArray[1].

## Add Items to an Array with push() and unshift()

### push()

The first and probably the most common JavaScript array method you will encounter is push(). The push() method is used for adding an element to the end of an array.

Let's say you have an array of elements, each element being a string representing a task you need to accomplish. It would make sense to add newer items to the end of the array so that we could finish our earlier tasks first.

### unshift()

Not all tasks are created equal. You might run into a scenario in which you are adding tasks to your array and suddenly you encounter one which is more urgent than the others.

It's time to introduce our friend unshift() that allows us to add items to the beginning of our array.