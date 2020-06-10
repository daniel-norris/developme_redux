import React from 'react'; 

const Input = ({ value, type, id, name, required, onChange }) => (
    <input 
        type={ type }
        id={ id }
        name={ name }
        value={ value }
        onChange={ onChange }
        required={ required ? "required" : null }>
    </input>
);

export default Input; 
