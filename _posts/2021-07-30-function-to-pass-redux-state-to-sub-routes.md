---
Layout:
Title: "Use the connect() Function to Pass Redux State to Sub-routes"
Date: "2021-07-30"
---

# Introduction

React uses a component state that can be modified into the component and pass it to the child component as it gets connected to the parent. Still, this state is not sufficient to manage the state if components are not interrelated.

Redux is a library that allows a React app to create a global state object that can be used in any component across the app by consuming the state object. A Redux state is a standalone object managed globally in the React app. Thus, every route and sub-route should be able to access the global state piece, which is possible using the connect() method. This guide will demonstrate how any app sub-route can access the Redux state.

# Body

Create Redux State with Store
Before any component, access the Redux state object. The first step is to create the store that will represent the combined state object used by the various components in the React app.

Two libraries need to get installed to configure the store and routes.

npm install react-redux
npm install react-router-dom
shell

Then, configure the router along with the route.

import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';
jsx
After importing the router, you need to configure various routes related to your components.

class AppRoutes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/screen1'} component={Screen1} />
                <Route path={'/screen2'} component={Screen2} />
                <Route path={'/screen3'} component={Screen3} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}
jsx
Based on the routes, if any component wants to access the Redux state, the store needs to be configured. Below is the code to create the store.

// To use createStore function
import { createStore } from 'redux';

const store = createStore(contactApp);
jsx
The store then is assigned to the <Provider>, which allows any component to access the global state object.

<Provider store={store}>
    <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/screen1'} component={Screen1} />
        <Route path={'/screen2'} component={Screen2} />
        <Route path={'/screen3'} component={Screen3} />
        <Route component={NotFoundPage} />
    </Switch>
</Provider>
jsx
The provider has one property called store that defines the store and makes Redux states available across the app. Your app is configured to access the Redux state object by implementing a router along with the Redux store. Now you can access any piece of state using the connect() function.

Accessing Redux State to the Sub-routes
After configuring the store with the provider you can access the state object, but it can be done directly; hence, the Redux's additional functionality gets used.

React Redux has one additional feature called connect() that allows you to connect your React component with the Redux store. The connect() function has four different props:

mapStateToProps
mapDispatchToProps
mergeProps
options
You can use the props mapStateToProps to extract the global state and use it into the existing component. For example, one form adds the contact and another component, which shows the contact list; hence, the form component is a parent, and the list component is a child component.

# Conclusion

The Redux library allows us to implement global state objects accessible from any component across the app; thus, the connect() function enables any sub-routes to in your app to extract the required state object from the store.