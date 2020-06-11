import React from 'react'; 

const Table = ({ history, handleDelete }) => (
    <table className="table table-hover mt-4 mx-2">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Player 1</th>
                <th scope="col">Player 2</th>
                <th scope="col">Complete</th>
                <th scope="col">Winner</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            { history.map((game, index) => (
                <tr key={ index } >  
                    <th scope="row">{ game.id }</th>
                    <td>{ game.player_1.score }</td>
                    <td>{ game.player_2.score }</td>
                    <td>{ game.complete ? "Yes" : "No" }</td>
                    <td>{ game.player_1.won ? game.player_1.name : game.player_2.name }</td>
                    <td>
                        <button 
                            onClick={ () => handleDelete(game.id) }
                            className="btn btn-danger">
                            &times;
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

);

export default Table; 