import React from 'react'; 
import { EN, ES } from '../../translations.json'; 

const Player = ({ name, isEnglish, label, serving, score, handlePlayer, winner }) => (
    <div className="col-md-6 mt-4">
        <div className={ serving ? "bg-dark text-white card text-center" : "card text-center" }>
            <h5 className="card-header">{ isEnglish ? EN.player : ES.player } { label }: { name }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ score }
                </p>
            </div>
            <div className="card-footer">
                <button 
                    disabled={ winner ? "disabled" : null }
                    className="form-control btn btn-success"
                    onClick={ handlePlayer }>+
                </button>
            </div>
        </div>
    </div>
);

export default Player; 