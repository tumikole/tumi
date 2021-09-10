---
Layout:
Title: "Queryselectors and getElementById"
Date: "2021-04-20"
---

## Difference between querySelector and getElementById

With a querySelector statement, you can select an element based on a CSS selector. This means you can select elements by ID, class, or any other type of selector. Using the getElementById method, you can only select an element by its ID. Generally, you should opt for the selector that most clearly gets the job done.

## querySelector

The querySelector() method returns the first element that matches a specified CSS selector(s) in the document. Note: The querySelector() method only returns the first element that matches the specified selectors. To return all the matches, use the querySelectorAll() method instead.

#### What does querySelector return?

The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

## getElementById

The getElementById() is a DOM method used to return the element that has the ID attribute with the specified value. This is one of the most common methods in the HTML DOM and is used almost every time we want to manipulate an element on our document. This method returns null if no elements with the specified ID exists

#### How do I get value from getElementById?

Input Text value Property
Change the value of a text field: getElementById("myText"). ...
Get the value of a text field: getElementById("myText"). ...
Dropdown list in a form: var mylist = document. ...
Another dropdown list: var no = document. ...
An example that shows the difference between the defaultValue and value property: getElementById("myText");