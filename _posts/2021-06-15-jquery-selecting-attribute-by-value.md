---
Layout:
Title: "Jquery: Selecting by Attribute value"
Date: "2021-06-15"
---

## Selecting by attribute value

If you want to select elements with a certain attribute, use ([attributeName="value"]).

<input name="myInput" />

If you want to test your input:

$("[name='myInput']").value("Test");

You can also use the attribute selector in combination with a tag name to be more specific.

<input name="myElement" />`<br>
<button name="myElement">Button</button>

If you want to removes the input field not the button

$("input[name='myElement']").remove(); 