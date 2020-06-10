import React from 'react'; 

const Label = ({ id, children }) => (
    <label htmlFor={ id }>{ children }</label>
);

export default Label; 
