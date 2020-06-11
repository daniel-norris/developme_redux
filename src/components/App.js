import React from "react";
import Winner from "./Winner";
import Button from "./Button";
import Header from "./Header";
import Language from "./Language"; 
import Table from "./Table"; 

import Player1 from './Player/Player1'; 
import Player2 from './Player/Player2'; 

import Settings from './Settings'; 

/* import history for programmatic navigation */ 
import history from '../history'; 

/* routing */ 
import {
    Router, 
    Route, 
    Switch
} from 'react-router-dom'; 
import Loading from "./Loading";

// logic here determining if id is set to 0 or not 

const App = ({ 
    handlePlayer1, 
    handlePlayer2, 
    handleReset, 
    handleLanguageChange
}) => (

    <Router history={ history }>
        <>
            <Language handleLanguageChange={ handleLanguageChange }/>
            
            <Switch>
                <Route exact path="/">
                    <Loading>
                        <Settings />
                    </Loading>
                </Route>

                <Route exact path="/pongping"> 

                    <main>
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
                        
                    </main>

                    <Loading>
                        <Table />
                    </Loading>
                        
                    <hr />

                    { /* reset button */}
                    <Button handleReset={ handleReset } />

                </Route>
                
                <p>No page found.</p>

            </Switch>
            
        </>
    </Router>
);

export default App;