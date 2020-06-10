import React from 'react' 

const Form = ({ children, onSubmit }) => (
    <form
        className="d-flex flex-column my-2"
        onSubmit={ onSubmit }>
            { children }
    </form>
);

export default Form; 