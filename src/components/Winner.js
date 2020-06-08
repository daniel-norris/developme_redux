import React from 'react'; 

const Winner = ({ winner }) => (
    <h2 className={ winner ? "alert alert-success" : "alert alert-secondary" }>
        { winner ? `Player ${winner} wins!` : "Game in progress..." }
    </h2>
);

export default Winner; 