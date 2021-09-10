---
Layout:
Title: "React Redux Provider"
Date: "2021-08-31"
---

The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app's component tree inside of it.

ex:
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(  
   <Provider store={store}>    
     <App />  
   </Provider>,  
   rootElement
);

  The above piece of code ensures that the redux store is available to all the nodes in the component tree via the context api. In fact, this is exactly how the ‘connect’ function gets access to the redux store, even though we never explicitly pass the store as a reference or a parameter anywhere.

  In fact, react-redux has implemented the provider pattern where Provider component receives the state as props, and post that, each child component has implicit access to the managed state.