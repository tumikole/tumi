---
Layout:
Title: "Lifecycle Methods"
Date: "2021-08-12"
---
# Lifecycle methods

## Introduction

Today im gonna talk about lifecycle methods.
lifecycles play an important role in the timing of rendering.

## Body

### On Mounting (componentDidMount)

The lifecycle method componentDidMount is called right after the first render completes. There used to be a componentWillMount that happens before the first render

ex:
const FunctionalComponent = () => {
 React.useEffect(() => {
   console.log("Hello");
 }, []);
 return <h1>Hello, World</h1>;
};

Replacing componentDidMount, We use the useEffect hook with the second argument of []. The second argument of the useState hook is normally an array of a state(s) that changes, and useEffect will be only called on these selected changes. But when it’s an empty array like this example, it will be called once on mounting.

class ClassComponent extends React.Component {
 componentDidMount() {
   console.log("Hello");
 }

 render() {
   return <h1>Hello, World</h1>;
 }
}

Basically the same thing happens here: componentDidMount is a lifecycle method that is called once after the first render.

## Conclusion

I would like to conclude that functional components are taking over modern React. 
functional component is written shorter and simpler, which makes it easier to develop, understand, and test. Class components can also be confusing with so many uses of this. Using functional components can easily avoid this kind of mess and keep everything clean.