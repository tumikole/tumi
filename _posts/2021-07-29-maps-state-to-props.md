---
Layout:
Title: "Map State To Props"
Date: "2021-07-29"
---

## What is MAP state to props and map dispatch to props?

mapStateToProps() is a utility which helps your component get updated state, mapDispatchToProps() is a utility which will help your component to fire an action event.

## What is mapDispatchToProps?

Specifically, mapDispatchToProps is the second argument that connect expects to receive. In the context of a react-redux application, the mapDispatchToProps argument is responsible for enabling a component to dispatch actions.

## What is MAP state to props?

As the first argument passed in to connect , mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It's frequently referred to as just mapState for short. It receives the entire store state, and should return an object of data this component needs.

## Dispatching an action within a reducer is an anti-pattern.

Your reducer should be without side effects, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.

## How do you convert state to props?

Component { state = { description: '' } constructor (props) => { const { description } = props; this. state = {description}; } render () { const {state: { description }} = this; return ( <input type="text" value={description} /> ); } } export default SecondComponent; Update: I changed setState() to this.