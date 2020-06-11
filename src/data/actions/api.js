import { saveSettings } from './state'; 
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
    }
}