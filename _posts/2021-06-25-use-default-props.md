---
Layout:
Title: "Use Default Props"
Date: "2021-06-25"
---

## When should I use default props?

To do so, you simply assign a defaultProps object to the component; when React renders the component, the default props will be used unless the parent overrides them. Default props work great when the same default value can be used for every instance of the component.

## What is the use of default props in react?

The defaultProps is a React component property that allows you to set default values for the props argument. If the prop property is passed, it will be changed. The defaultProps can be defined as a property on the component class itself, to set the default props for the class.

## How do you set props to react?

There is no way in React to set props (even though it was possible in the past). After all, props are only used to pass data from one component to another component React, but only from parent to child components down the component tree.

## React Props Validation

App. propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App. defaultProps.
1. App.js.
2. Main.js.
3. Output:

Ex:

class CatComponent extends React.Component {    
  constructor(props) {}    
  render() {        
    return <div>{this.props.catName} Cat, 
      Eye Color: {this.props.eyeColor }, 
        Age: {this.props.age}</div>    
  }
}
CatComponent.defaultProps = {    
  catName: "Sandy",    
  eyeColor: "deepblue",    
  age: "120"
}