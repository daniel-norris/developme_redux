import React from 'react'; 

const Input = ({ type, id, name, required }) => (
    <input 
        type={ type }
        id={ id }
        name={ name }
        required={ required ? "required" : null }>
    </input>
);

export default Input; 
