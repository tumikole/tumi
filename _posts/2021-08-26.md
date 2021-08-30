---
Layout:
Title: "MAP state to props?"
Date: "2021-08-26"
---

## What is MAP state to props?

The mapStateToProps function is used in the Redux pattern to reflect any updates to the Redux store and merge them into props in your component. The Redux store serves as a centralized place for the state to live in your application.

As the first argument passed in to connect , mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It's frequently referred to as just mapState for short. It receives the entire store state, and should return an object of data this component needs.

ex:
const mapStateToProps = (state) => {
  return { ingredients: state.ingredients };
  };
}

The mapStateToProps function is wrapped in a connect function provided by the React-Redux library. The connect function will allow four optional parameters with mapStateToProps being the first and if no other is provided then a dispatch function will be automagically created to access in props. It also is a wrapper for the entire component and is immediately invoked as connect is called.
