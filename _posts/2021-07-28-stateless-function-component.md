---
Layout:
Title: "Stateless Functional Component"
Date: "2021-07-28"
---

# Introduction

Stateless functional components are an awesome way to decouple complex architecture from the design of a component's output. You can remove the unnecessary bloat of complex logic and provide a simple presentational component that is easy to read and re-use.

# Body

## Create a Stateless Functional Component - React


A functional component is just a plain javascript function which takes props as an argument and returns a react element. 

const MyStatelessComponent = props => React.
 createElement('div', null, props.name);

## What are stateless components?


Stateless components are those components which don't have any state at all, which means you can't use this. setState inside these components. It is like a normal function with no render method. It has no lifecycle, so it is not possible to use lifecycle methods such as componentDidMount and other hooks.

## Why stateless is better than stateful React?


Stateless components are simple functional component without having a local state but remember there is a hook in react to add state behavior in functional component as well. Stateful component can contains the state object and event handling function, user actions as well.

## What is the difference between stateful and stateless components?


Stateful and stateless components have many different names. The literal difference is that one has state, and the other doesn't. That means the stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing.

## Example

### Functions

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

### Classes

class App extends Component {
    constructor(){
        super()
        this.state = {
            name: "Sally",
            age: 13
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )    
    }
}