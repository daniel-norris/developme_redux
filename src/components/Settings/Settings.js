import React, { Component } from 'react'
import Form from '../Form'; 
import Label from '../Label'; 
import Input from '../Input'; 
import Header from "../Header";

class Settings extends Component {
    constructor(props) {
        super(props); 
        this.state = { p1name: props.p1name }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
    handleChange(e) {
        this.setState({ p1name: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault(); 
    }

    render() {

        const { p1name } = this.props; 

        return(
            <>
                <Header />
                
                <Form onSubmit={ this.handleSubmit }>
                    <Label id={ "p1name" }>Player 1 Name{ p1name }</Label>
                    <Input 
                        id= { "p1name" } 
                        type={ "text" } 
                        name={ "p1name" } 
                        onChange={ this.handleChange }
                        required></Input>
                    <Label id={ "p2name" }>Player 2 Name</Label>
                    <Input 
                        id= { "p2name" } 
                        type={ "text" } 
                        name={ "p2name" } 
                        required></Input>
                    <Label id={ "score" }>Winning Score</Label>
                    <Input 
                        id= { "score" } 
                        type={ "number" } 
                        name={ "score" } 
                        required></Input>
                    <Label id={ "alternate" }>Alternate Every</Label>
                    <Input 
                        id= { "alternate" } 
                        type={ "number" } 
                        name={ "alternate" } 
                        required></Input>
                </Form>

                <button className="btn btn-info">Start Game</button>
            </>
        )
    }

}

export default Settings; 