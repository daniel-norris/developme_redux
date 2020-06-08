import React from "react";
import Player from './components/Player'; 
import Winner from "./components/Winner";
import Button from "./components/Button";
import Header from "./components/Header";

const App = ({ p1, p2, player1, player2, handlePlayer1, handlePlayer2, handleReset, serving, winner }) => (
    <React.Fragment>
        {/* header */}
        <Header />

        {/* scores */}
        <div className="row mb-4">

            <Player 
              p1={ p1 }
              player1={ player1 } 
              handlePlayer1={ handlePlayer1 } 
              serving={ serving } />

            <Player 
              p2={ p2 }
              player2={ player2 } 
              handlePlayer2={ handlePlayer2 } 
              serving={ serving } />

        </div>

        { /* winner message */}
        <Winner winner={ winner } />      

        <hr />

        { /* reset button */}
        <Button handleReset={ handleReset } />
        
    </React.Fragment>
);

export default App;