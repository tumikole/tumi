---
Layout:
Title: "Store Data with Sass Variables"
Date: "2021-06-16"
---

One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript. In Javascript, variables are defined using the let and const keywords. In Sass, variables start with a $ followed by the variable name.

ex:

$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
}

#container {
  width: $myWidth;
}