// dont need to import react into data files 

import initial from './initial'; 

const history = ({ settings, history, player1, player2, winner }) => ({
    ...initial, 
    settings: { ...settings},
    history: [ ...history, {
        player_1: { score: player1, won: winner === 1 }, 
        player_2: { score: player2, won: winner === 2 }
        }
    ], 
});

const player2Lead = ({ player1, player2 }) => {
  return player2 >= (player1 + 2); 
}

const player1Lead = ({ player1, player2 }) => {
  return player1 >= (player2 + 2);
}

const findWinner = ({ player1, player2, settings }) => {
  return player1 > player2 ? settings.p1name : settings.p2name; 
}

const winCondition = ({ player1, player2, settings }) => {
    return player1 >= (settings.score ? settings.score : 21) || player2 >= (settings.score ? settings.score : 21); 
}

const winner = state => ({
    ...state, 
    winner: ((winCondition(state)) && (player1Lead(state) || player2Lead(state))) ? findWinner(state) : 0 
}); 

const alternateOn = ({ player1, player2, settings }) => {
    return player1 >= (settings.score - 1) && player2 >= (settings.score - 1) ? 2 : settings.alternate;
}

const totalScores = state => {
    return state.player1 + state.player2; 
}


// refactor this using computed property names and an action payload 
// refactor using tdd and tests from previous weeks 
const player1 = state => ({ 
    ...state, 
    player1: state.winner ? state.player1 : state.player1 + 1 });

const player2 = state => ({ 
    ...state, 
    player2: state.winner ? state.player2 : state.player2 + 1 });

const server = state => ({
    ...state, 
    p1serving: ((totalScores(state)) % alternateOn(state)) === 0 ? !state.p1serving : state.p1serving
}); 

const saveSettings = (state, { settings }) => ({
    ...state, 
    settings: settings
})
    
// reducer goes here 
const reducer = (state, action) => { 
    switch(action.type) {
        case "PLAYER1": return winner(server(player1(state))); 
        case "PLAYER2": return winner(server(player2(state))); 
        case "SAVE_SETTINGS": return saveSettings(state, action); 
        case "LANGUAGE": return { ...state, isEnglish: !state.isEnglish };
        case "RESET": return history(state); // get history to trigger on win not reset 
        default: return state; 
    }
}

export default reducer; 