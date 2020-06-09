import React from 'react'; 
import { EN, ES } from '../../translations.json'; 

const Winner = ({ isEnglish, winner }) => (
    <h2 className={ winner ? "alert alert-success" : "alert alert-secondary" }>
        { winner ? `${isEnglish ? EN.player : ES.player} ${winner} ${isEnglish ? EN.win : ES.win}!` : (isEnglish ? EN.ingame : ES.ingame) }
    </h2>
);

export default Winner; 