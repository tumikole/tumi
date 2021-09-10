---
Layout:
Title: "Change Css inline Conditionally Based on Components"
Date: "2021-08-19"
---

# Introduction

Everything seems to be managed by JavaScript. This shift in the paradigm that has led to a new way of thinking about styling. You can set styles in multiple ways, including using classes, IDs, or inline styles.

# Body

## Conditional Styling

Use the ternary (?, :) or logical operators (&& or ||) to conditionally add or remove a style object based on the state or props. Add the conditional styling at the end of the default styles, so that the conditional styling does not get overridden by the default ones. Also, for readability, it is best to store any style object in a separate variable or property.

## How do you do a conditional styling in react?

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

ex:

class App extends Component {
  constructor() {
    super()
    this.state = { isRed: true }
  }

  render() {
    const isRed = this.state.isRed

    return <p style={{ color: isRed ? 'red' : 'blue' }}>Example Text</p>
  }