// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// This app is going to do the following:
// Track balance
// Increment balance when there is a deposit
// Decrement balance when there is a withdrawal

// Setting up Redux:
// 1. Create an object to represent the store.
// 2. List all the ways that state can change.
// 3. Write a function to update and return new state.

// 1. Create an object to represent the store. (this object will become our store)
const defaultState = {
  balance: 0
};

// 2. List all the ways that state can change. (this is the action)
const actionIncrement = {
  type: 'increment'
};

const actionDecrement = {
  type: 'decrement',
};

// 3. Write a function to update and return new state. (this is the reducer)
function account(state = defaultState, action) {
  switch (action.type) {
    case 'increment':
      return {
        balance: state.balance + 1
      }
    case 'decrement':
      return {
        balance: state.balance - 1
      }
      // if none of the cases is found, return teh default state:
    default:
      return state;
  }

}

// set up store by passing a reducer:
console.log('Starting banking app');
const store = createStore(account);

// Subscribe to changes in store (Whatever goes inside this function will run whenever something changes):
store.subscribe(() => {
  console.log('=== Store updated! ===');
  console.log(store.getState());
});

// make things available in the browser console:
window.store = store;
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement;