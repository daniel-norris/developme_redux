import React, { Fragment } from "react";
import Winner from "./Winner";
import Button from "./Button";
import Header from "./Header";
import Language from "./Language"; 
import Table from "./Table"; 

import Player1 from './Player/Player1'; 
import Player2 from './Player/Player2'; 

/* form imports */ 
import Form from './Form'; 
import Label from './Label'; 
import Input from './Input'; 

/* routing */ 
import {
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch
} from 'react-router-dom'; 

const App = ({ 
    handlePlayer1, 
    handlePlayer2, 
    handleReset, 
    handleLanguageChange
}) => (

    <Router>
        <>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Form>
                        <Label id={ "p1name" }>Player 1 Name</Label>
                        <Input id= { "p1name" } type={ "text" } name={ "p1name" } required></Input>
                        <Label id={ "p2name" }>Player 2 Name</Label>
                        <Input id= { "p2name" } type={ "text" } name={ "p2name" } required></Input>
                        <Label id={ "score" }>Winning Score</Label>
                        <Input id= { "score" } type={ "number" } name={ "score" } required></Input>
                        <Label id={ "alternate" }>Alternate Every</Label>
                        <Input id= { "alternate" } type={ "number" } name={ "alternate" } required></Input>
                        
                        <button className="btn btn-info mt-4">Start Game</button>
                    </Form>
                </Route>

                <Route exact path="/pongping"> 

                    <Language handleLanguageChange={ handleLanguageChange }/>

                    <div className="d-flex">
                        <main style={{ width: "100vw" }}>
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
                        
                        <Table />

                    </div>


                    <hr />

                    { /* reset button */}
                    <Button handleReset={ handleReset } />

                </Route>
            </Switch>
            
        </>
    </Router>
);

export default App;