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
const reducer = (state, action) => { 
  switch(action.type) {
    case "PLAYER1": return { ...state, player1: state.player1 + 1 };
    case "PLAYER2": return { ...state, player2: state.player2 + 1 };
    case "RESET": return initial; 
    default: return state; 
  }
}


const store = createStore(
  reducer, 
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),
); 

// put reactDOM into store.subscribe() -- not best practice*
const render = () => {
  let state = store.getState(); 
  ReactDOM.render(
    <React.StrictMode>
      <App 
        player1={ state.player1 } 
        player2={ state.player2 }
        handlePlayer1={ () => store.dispatch({ type: "PLAYER1" }) }
        handlePlayer2={ () => store.dispatch({ type: "PLAYER2" }) }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render); 
render(); 


// create store here 

// subscribe here


// dispatch here 

