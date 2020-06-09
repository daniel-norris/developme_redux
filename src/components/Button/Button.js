import React from 'react'; 
import { EN, ES } from '../../translations.json'; 

const Button = ({ isEnglish, handleReset }) => (
    <button
        className="btn btn-danger"
        onClick={ handleReset }>
            { isEnglish ? EN.reset : ES.reset }
    </button>
);

export default Button; 
