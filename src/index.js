import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // dont need this
import App from './App';
import * as serviceWorker from './serviceWorker'; // dont need this

// import redux
import { createStore } from 'redux'; 

// final stage import persist state and compose for local storage

// initial state goes here for entire app 
const initial = {
    player1: 0,
    player2: 0,
};

// reducer goes here 
const reducer = (state, action) => { 
  return state; 
}



// put reactDOM into store.subscribe() -- not best practice*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// create store here 
const store = createStore(reducer, initial); 

// subscribe here
store.subscribe(() => {
    let state = store.getState(); 
    console.log(state.player1); 
    console.log(state.player2); 
})

// dispatch here 





// dont need this below ... 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
