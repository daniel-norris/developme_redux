import React from 'react'; 

const Player = ({ p1, p2, serving, player1, player2, handlePlayer1, handlePlayer2 }) => (
    <div className="col-md-6 mt-4">
        <div className={ p1 === "player1" ? "bg-dark text-white card text-center" : "card text-center" }>
            <h5 className="card-header">Player { p1 === "player1" ? "1" : "2" }</h5>
            <div className="card-body">
                <p className="card-text display-1">{ p1 === "player1" ? player1 : player2 }
                </p>
            </div>
            <div className="card-footer">
                <button 
                    className="form-control btn btn-success"
                    onClick={ p1 === "player1" ? handlePlayer1 : handlePlayer2 }>+
                </button>
            </div>
        </div>
    </div>
);

export default Player; 