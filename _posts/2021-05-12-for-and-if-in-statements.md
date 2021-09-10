---
Layout:
Title: "if and for in statements"
Date: "2021-05-12"
---

## Using for…in and if…in Statements in Javascript

### for in statement

The for in statement enumerates over each key in an object. It’s worth noting that this statement will enumerate over keys that are string data types, but will ignore symbol types.

for (variable in object)
statement

ex:

let person = {name: “Harry”, age: “35”, location: “NYC”}
for(let key in personObj){
 console.log(key)
 }

 and the console will print 
name
age
location

## ### if in statement

The if in statement isn’t explicitly designated as it’s own statement

The in operator alone will return true if a specified key/property is in an object:

let person = {name: "Harry", age: "35", location: "NYC"}
console.log('name' in person)
#=> true 

So when turning that into a conditional statement with if in might look like this:

if('age' in person){
    console.log(person.age)
}
#=> 35
