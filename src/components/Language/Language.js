import React from 'react'; 
import EN from '../../translations.json'; 


const Language = ({ isEnglish, handleLanguageChange }) => (
    <button
        className="btn btn-secondary"
        onClick={ handleLanguageChange }>
            { isEnglish ? "Language: English (United Kingdom)" : "Language: Esperanto" }
    </button>
);

export default Language; 
