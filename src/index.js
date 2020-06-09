import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import redux
import { createStore, compose } from 'redux'; 

// final stage import persist state and compose for local storage
import persistState from 'redux-localstorage'; 

// initial state goes here for entire app 
const initial = {
    player1: 0,
    player2: 0,
    serving: false, 
    winner: 0,
    history: []
};

const history = state => ({
    ...initial, 
    history: [ ...state.history, {
      player_1: { score: state.player1, won: state.winner === 1 }, 
      player_2: { score: state.player2, won: state.winner === 2 }
    }
  ]
});

const player2Lead = state => {
  return state.player2 >= state.player1 + 2; 
}

const player1Lead = state => {
  return state.player1 >= state.player2 + 2;
}

const findWinner = state => {
  return state.player1 > state.player2 ? 1 : 2; 
}

const winner = state => ({
  ...state, 
  winner:  ((state.player1 >= 21 || state.player2 >= 21) && (player1Lead || player2Lead)) ? findWinner(state) : 0 
}); 

const alternateServes = state => {
    return state.player1 >= 20 && state.player2 >= 20 ? 2 : 5;
}

// refactor this using computed property names and an action payload 
const player1 = state => ({ 
  ...state, 
  player1: state.winner ? state.player1 : state.player1 + 1 });

const player2 = state => ({ 
  ...state, 
  player2: state.winner ? state.player2 : state.player2 + 1 });

const server = state => ({
    ...state, 
    serving: ((state.player1 + state.player2) % alternateServes(state) === 0) ? !state.serving : state.serving

}); 
    
// reducer goes here 
const reducer = (state, action) => { 
  switch(action.type) {
    case "PLAYER1": return winner(server(player1(state))); 
    case "PLAYER2": return winner(server(player2(state))); 
    case "RESET": return history(state); 
    default: return state; 
  }
}

// setup for middleware localstorage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  initial,
  composeEnhancers(persistState())
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

