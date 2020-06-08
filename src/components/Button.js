import React from 'react'; 

const Button = ({ handleReset }) => (
    <button
        className="btn btn-danger"
        onClick={ handleReset }>
            Reset
    </button>
);

export default Button; 
