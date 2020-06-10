import React, { Component } from 'react'
import Form from '../Form'; 
import Label from '../Label'; 
import Input from '../Input'; 
import Header from "../Header";

class Settings extends Component {
    constructor(props) {
        super(props); 
        this.state = { settings: [{ 
            p1name: "", 
            p2name: "",
            score: 0,
            alternate: 0 
        }] }
        
        this.handleP1Change = this.handleP1Change.bind(this); 
        this.handleP2Change = this.handleP2Change.bind(this); 
        this.handleScoreChange = this.handleScoreChange.bind(this); 
        this.handleAlternateChange = this.handleAlternateChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
    handleP1Change(e) {

        let updateSettings = [...this.state.settings]; 
        updateSettings[0].p1name = e.currentTarget.value; 

        this.setState({ settings: updateSettings })        
    }
    
    handleP2Change(e) {

        let updateSettings = [...this.state.settings]; 
        updateSettings[0].p2name = e.currentTarget.value; 

        this.setState({ settings: updateSettings })        
    }

    handleScoreChange(e) {

        let updateSettings = [...this.state.settings]; 
        updateSettings[0].score = e.currentTarget.value; 

        this.setState({ settings: updateSettings })        
    }

    handleAlternateChange(e) {

        let updateSettings = [...this.state.settings]; 
        updateSettings[0].alternate = e.currentTarget.value; 

        this.setState({ settings: updateSettings })        
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.handleSave(this.state.settings);
    }

    render() {

        return(
            <>
                <Header />
                
                <Form onSubmit={ this.handleSubmit }>
                    <Label id={ "p1name" }>Player 1 Name</Label>
                    <Input 
                        id= { "p1name" } 
                        type={ "text" } 
                        name={ "p1name" } 
                        value={ this.state.settings[0].p1name }
                        onChange={ (e) => this.handleP1Change(e) }
                        required></Input>
                    <Label id={ "p2name" }>Player 2 Name</Label>
                    <Input 
                        id= { "p2name" } 
                        type={ "text" } 
                        name={ "p2name" }
                        value={ this.state.settings[0].p2name }
                        onChange={ (e) => this.handleP2Change(e) }
                        required></Input>
                    <Label id={ "score" }>Winning Score</Label>
                    <Input 
                        id= { "score" } 
                        type={ "number" } 
                        name={ "score" } 
                        value={ this.state.settings.score }
                        onChange={ (e) => this.handleScoreChange(e) }
                        required></Input>
                    <Label id={ "alternate" }>Alternate Every</Label>
                    <Input 
                        id= { "alternate" } 
                        type={ "number" } 
                        name={ "alternate" } 
                        value={ this.state.settings.alternate }
                        onChange={ (e) => this.handleAlternateChange(e) }
                        required></Input>
                <button className="btn btn-info mt-2">Start Game</button>
                </Form>

            </>
        )
    }

}

export default Settings; 