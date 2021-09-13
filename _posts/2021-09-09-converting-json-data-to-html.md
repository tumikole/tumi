---
Layout:
Title: "How to convert JSON data to html"
Date: "2021-09-09"
---

## Displaying the JSON data

Step 1 – Get the div element from the body. Remember the div with the myData id from our index. ...
Step 2 – Loop through every object in our JSON object. Next step is to create a simple loop. ...
Step 3 – Append each person to our HTML page.

## How do I display formatted JSON data in HTML?

Approach:
Declare a JSON object and store it into variable.
Use JSON. stringify(obj) method to convert JavaScript objects into strings and display it.
Use JSON. stringify(obj, replacer, space) method to convert JavaScript objects into strings in pretty format. In this example, we use space size four.

## How do I save HTML form data to JSON file?

Step 0: Create a HTML form. Mention the names of the JSON fields in the "name" attribute.

<form action="/new" method="post">
 
  <input name="title" type="text">
  <input name="description" type="text">
  <button type="submit">Submit Form</button>
 
</form>

Step 1: Create a new Model for the data you want to save in JSON.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
const postSchema = new Schema({
    title: { type: String , required: true},
    description: { type: String},
});
 
var Post = mongoose.model('Post', postSchema);
module.exports = Post;

Step 2: Install the body-parser package. 

$ npm install body-parser

Step 3: Create a POST method to handle the form.

var express = require('express');
var router = express.Router();
const Post = require('../models/post');
 
 
router.post('/new', (req, res) => {
    var post = new Post(req.body);
 
    post.save(function(err, user) {
        if(err) console.log(err);
        return res.send("Success! Your post has been saved.");
    });
});


#### (from freecodecamp)

<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      const req = new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        let html = "";
        // Add your code below this line


        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML = html;
      };
    };
  });
</script>