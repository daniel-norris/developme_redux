import React from 'react'; 

const Language = ({ isEnglish, handleLanguageChange }) => (
    <button
        className="btn btn-secondary"
        onClick={ handleLanguageChange }>
            { isEnglish ? "Language: English (United Kingdom)" : "Language: Esperanto" }
    </button>
);

export default Language; 
