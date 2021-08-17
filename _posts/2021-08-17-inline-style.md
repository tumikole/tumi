---
Layout:
Title: "Inline Style"
Date: "2021-08-14"
---
## How do you apply inline style?

An inline style may be used to apply a unique style for a single element. To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

## How do you do a conditional inline style in React?

class App extends Component {
constructor() {
super()
this. state = { isRed: true }
}
​
render() {
const isRed = this. state. isRed.

## How do I change inline style in React?

Setting Inline Styles in a React Component

To specify the styling, use the style prop on the <H1> component. Specify the style object inside the constructor as follows. Notice here that the text-align CSS property got camel-cased to textAlign . Pass this styles object to the <H1 /> component, as shown below.

## Should I use inline styles in react?

One of the main reasons that inline styling is not a good choice for your application is because it does not support (or it has really poor support) for CSS features. Every application nowadays might have to end up using some selectors such as :hover , :active , :focused 