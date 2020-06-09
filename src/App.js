import React from "react";
import Player from './components/Player'; 
import Winner from "./components/Winner";
import Button from "./components/Button";
import Header from "./components/Header";

const App = ({ player1, player2, handlePlayer1, handlePlayer2, handleReset, serving, winner }) => (
    <React.Fragment>
        {/* header */}
        <Header />

        {/* scores */}
        <div className="row mb-4">

            <Player 
              serving={ !serving }
              label={ "1" }
              score={ player1 }
              handlePlayer={ handlePlayer1 } 
              winner={ winner }/>

            <Player 
              serving={ serving }
              label={ "2" }
              score={ player2 } 
              handlePlayer={ handlePlayer2 } 
              winner={ winner }/>

        </div>

        { /* winner message */}
        <Winner winner={ winner } />      

        <hr />

        { /* reset button */}
        <Button handleReset={ handleReset } />
        
    </React.Fragment>
);

export default App;