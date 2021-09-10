---
Layout:
Title: "Components and Props"
Date: "2021-08-10"
---

# Components and Props

## javascript function.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

This function is a valid React component because it accepts a single props object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

## class to define a component

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

## Composing Components

Components can refer to other components in their output.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);