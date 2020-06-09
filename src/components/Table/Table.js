import React from 'react'; 

const Table = ({ history }) => (
    <table className="table table-sm">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Player1</th>
                <th scope="col">Player2</th>
                <th scope="col">Winner</th>
            </tr>
        </thead>
        <tbody>
            { history.map((game, index) => (
                <tr>  
                    <th key={ index } scope="row">{ index + 1 }</th>
                    <td>{ game.player_1.score }</td>
                    <td>{ game.player_2.score }</td>
                    <td>{ game.player_1.won ? "P1" : "P2" }</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Table; 