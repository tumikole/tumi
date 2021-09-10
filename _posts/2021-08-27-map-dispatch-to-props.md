---
Layout:
Title: "MAP dispatch to props"
Date: "2021-08-27"
---

## Two Forms of mapDispatchToProps

The mapDispatchToProps parameter can be of two forms. While the function form allows more customization, the object form is easy to use.

1. Function form: Allows more customization, gains access to dispatch and optionally ownProps
2. Object shorthand form: More declarative and easier to use

## What is MAP dispatch to props?

Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch. It lets you provide action dispatching functions as props. Therefore, instead of calling props.

## How do I test map dispatch to props?

Steps: extract each mapDispatchToProps property as a separate action creator function in another file. extract each mapStateToProps property as a separate selector function in another file. write tests for the selectors and action creators.
## example
const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {todos.map((todo) => (
      <Todo todo={todo} onClick={toggleTodo} />
    ))}
  </div>
)