import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import redux
import { createStore, compose } from 'redux'; 

// final stage import persist state and compose for local storage
import persistState from 'redux-localstorage';

// import react-redux 
import { Provider } from 'react-redux'; 

// import Redux components 
import reducer from './data/reducer'; 
import initial from './data/initial'; 



// setup for middleware localstorage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  initial,
  composeEnhancers(persistState())
); 

// put reactDOM into store.subscribe() -- not best practice*

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App 
        handlePlayer1={ () => store.dispatch({ type: "PLAYER1" }) }
        handlePlayer2={ () => store.dispatch({ type: "PLAYER2" }) }
        handleReset={ () => store.dispatch({ type: "RESET" }) }
        handleLanguageChange={ () => store.dispatch({ type: "LANGUAGE" })} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


