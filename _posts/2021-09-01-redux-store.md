---
Layout:
Title: "Redux store"
Date: "2021-09-01"
---

# Introduction

Redux stores are global states that store data you want to use across multiple components without drilling props at every level in your component tree. As an app gets large and complex, you might want to store large, bulky data inside your Redux store and access it inside a component. A Redux store doesn't have a limit on the amount of data stored, so you can pretty much use it to store almost anything, including bulky JSON data, data in table form, etc. 

# Body

In an empty Create-React-App React-Redux project, set up a simple store and reducer using the below code in a file called store.js inside the root directory.

import { createStore} from 'redux';
const initailState={
    data:'lorem ipsum',
}
const rootReducer=(state=initailState,action)=>{
    switch(action.type){
        case 'ADD_DATA':
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default createStore(rootReducer)

wrap your app around a Provider component and pass the store as props so that all the components inside this Provider component can use the store inside index.js.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

Create a file action.js and create an action creator with an action of type ADD_DATA. It also contains an object addData that connects the action type and payload properties to the data passed through dispatch() method.

const data='new data';
export const ADD_DATA = "ADD_DATA";
export const addData = {
      type: ADD_DATA,
      payload: data
};
export default addData;

Connect the store and dispatch() to a component that can dispatch some action and append data to the global state.

import React,{useState} from 'react';
import {connect} from 'react-redux'
import {addData} from './action';
import './App.css';

function App({addData,data}) {

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={addData}>Add Data</button>
    </div>
  );
}

const mapStateToProps=(state)=>({ data:state.data })

const mapDispatchToProps = (dispatch) => {
  return {
    addData: ()=> dispatch(addData)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

The app component renders a simple button that fires or dispatches the ADD_DATA action. On dispatching this action, you add some simple data to your global store's state.