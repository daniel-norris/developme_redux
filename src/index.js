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
    serving: false, 
    winner: ""
};

const alternateServes = state => {
    return state.player1 >= 20 && state.player2 >= 20 ? 2 : 5;
}

const player1 = state => ({ 
  ...state, 
  player1: state.winner ? state.player1 : state.player1 + 1,
  winner: state.player1 >= 21 && (state.player1 >= state.player2 + 2) ? "1" : "" });

const player2 = state => ({ 
  ...state, 
  player2: state.winner ? state.player2 : state.player2 + 1, 
  winner: state.player2 >= 21 && (state.player2 >= state.player1 + 2) ? "2" : "" });

const server = state => ({
    ...state, 
    serving: ((state.player1 + state.player2) % alternateServes(state) === 0) ? !state.serving : state.serving

}); 
    
// reducer goes here 
const reducer = (state, action) => { 
  switch(action.type) {
    case "PLAYER1": return server(player1(state)); 
    case "PLAYER2": return server(player2(state)); 
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
        serving={ state.serving }
        winner={ state.winner }
        handlePlayer1={ () => store.dispatch({ type: "PLAYER1" }) }
        handlePlayer2={ () => store.dispatch({ type: "PLAYER2" }) }
        handleReset={ () => store.dispatch({ type: "RESET" }) }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render); 
render(); 

// create store here 

// subscribe here

// dispatch here 

