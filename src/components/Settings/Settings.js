import React, { Component } from 'react'
import Form from '../Form'; 
import Label from '../Label'; 
import Input from '../Input'; 
import Header from "../Header";

class Settings extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            p1name: "", 
            p2name: "",
            score: 0,
            alternate: 0 
        }
        
        this.handleP1Change = this.handleP1Change.bind(this); 
        this.handleP2Change = this.handleP2Change.bind(this); 
        this.handleScoreChange = this.handleScoreChange.bind(this); 
        this.handleAlternateChange = this.handleAlternateChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
    handleP1Change(e) {
        this.setState({ p1name: e.currentTarget.value })        
    }
    
    handleP2Change(e) {
        this.setState({ p2name: e.currentTarget.value })        
    }

    handleScoreChange(e) {
        this.setState({ score: e.currentTarget.value })        
    }

    handleAlternateChange(e) {
        this.setState({ alternate: e.currentTarget.value })        
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.handleSave({...this.state}); // make sure you pass an copy and use curly braces to use the spread operator
    }

    render() {

        const { p1name, p2name, score, alternate } = this.state; 

        return(
            <>
                <Header />
                
                <Form onSubmit={ this.handleSubmit }>
                    <Label id={ "p1name" }>Player 1 Name</Label>
                    <Input 
                        id= { "p1name" } 
                        type={ "text" } 
                        name={ "p1name" } 
                        value={ this.props.p1name }
                        onChange={ (e) => this.handleP1Change(e) }
                        required></Input>
                    <Label id={ "p2name" }>Player 2 Name</Label>
                    <Input 
                        id= { "p2name" } 
                        type={ "text" } 
                        name={ "p2name" }
                        value={ this.props.p2name  }
                        onChange={ (e) => this.handleP2Change(e) }
                        required></Input>
                    <Label id={ "score" }>Winning Score</Label>
                    <Input 
                        id= { "score" } 
                        type={ "number" } 
                        name={ "score" } 
                        value={ this.props.score  }
                        onChange={ (e) => this.handleScoreChange(e) }
                        required></Input>
                    <Label id={ "alternate" }>Alternate Every</Label>
                    <Input 
                        id= { "alternate" } 
                        type={ "number" } 
                        name={ "alternate" } 
                        value={ this.props.alternate }
                        onChange={ (e) => this.handleAlternateChange(e) }
                        required></Input>
                <button className="btn btn-info mt-2">Start Game</button>
                </Form>

            </>
        )
    }

}

export default Settings; 