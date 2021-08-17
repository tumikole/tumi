---
Layout:
Title: "Ternary Operator"
Date: "2021-08-13"
---

## What are ternary operators in React?

The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement. When condition evaluates to true, the operator returns “This is True”; otherwise (when condition is falsy) it returns “This is False”.

## How can we use ternary operator in JSX?

In JSX - the syntax extension used for React - you can use plain JavaScript which includes if else statements, ternary operators, switch case statements, and much more. In a conditional render, a React component decides based on one or several conditions which DOM elements it will return.


ex:
Show an “Update” button when an edit has been made, else, show the “Edit” button.

render() {
  const edited = true;
  return (
    <div>
      {edited ? (
        <UpdateButton onClick={this.handleUpdateClick} />
      ) : (
        <EditButton onClick={this.handleEditClick} />
      )}
    </div>
  );
}
In the above example, when “edited” is true, we’ll show the “Update” button to the user. If “edited” is false, the “Edit” button is rendered.

## How ternary operator works in react JS?

The ternary operator in the react js works in the same way how it works in the Javascript. With the help of the ternary operator, we can display the contents on the basis of one condition where everything depends on the condition true and false we can put the contents on the conditional basis.