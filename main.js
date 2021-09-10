// let arr = [3, 4, 5, 6];

// let modifiedArr = arr.map(function(element){
//     return element *3;
// });

// console.log(modifiedArr);

// let arr = [3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++){
//   arr[i] = arr[i] * 3;
// }

// console.log(arr);




const defaultState {
    authenticated: false
};
switch (action.type){
    case 'LOGIN':
        return {authenticated:true}
        case 'LOGOUT':
            return {authenticated:false}
            default:
                return state
}

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};