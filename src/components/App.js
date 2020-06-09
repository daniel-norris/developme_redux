import React from "react";
import Winner from "./Winner";
import Button from "./Button";
import Header from "./Header";

import Player1 from './Player/Player1'; 
import Player2 from './Player/Player2'; 

const App = ({ 
    handlePlayer1, 
    handlePlayer2, 
    handleReset, 
}) => (

    <React.Fragment>
        {/* header */}
        <Header />

        {/* scores */}
        <div className="row mb-4">

            <Player1 
              label={ "1" }
              handlePlayer={ handlePlayer1 } />

            <Player2 
              label={ "2" }
              handlePlayer={ handlePlayer2 } />

        </div>

        { /* winner message */}
        <Winner />      

        <hr />

        { /* reset button */}
        <Button handleReset={ handleReset } />
        
    </React.Fragment>
);

export default App;