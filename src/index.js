import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import redux
import { createStore } from 'redux'; 

// final stage import persist state and compose for local storage

// initial state goes here for entire app 
const initial = {
    player1: 0,
    player2: 0,
};

// reducer goes here 
const reducer = (state) => { 
  return state; 
}


const store = createStore(reducer, initial); 

// put reactDOM into store.subscribe() -- not best practice*
const render = () => {
  let state = store.getState(); 
  ReactDOM.render(
    <React.StrictMode>
      <App player1={ state.player1 } player2={ state.player2 }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render); 
render(); 


// create store here 

// subscribe here


// dispatch here 

