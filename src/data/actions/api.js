import { loaded, saveSettings, player1, player2 } from './state'; 
import axios from '../../axios';

export const postGame = ({ p1name, p2name, score, alternate }) => {
    return (dispatch) => {
        axios.post('/games', {
            player_1: p1name, 
            player_2: p2name, 
            winning_score: score, 
            change_serve: alternate
        }).then(({ data }) => {
            dispatch(saveSettings(data.data));
        }); 
    };
};

export const patchScore = player => { 
    
    // can also access the current app state wthin API action creators 
    return (dispatch, getState) => { 

        const id = getState().settings.id; 

        axios.patch(`/games/${id}/score`, {
            player: player,
        }).then(({ data }) => {
            const playerAction = player === 1 ? player1(data.data) : player2(data.data); 
            dispatch(playerAction);
        }); 
    };
};

export const getGames = () => {
    return (dispatch) => {
        axios.get('/games').then(({ data }) => {
            dispatch(loaded(data.data)); 
        });
    };
};