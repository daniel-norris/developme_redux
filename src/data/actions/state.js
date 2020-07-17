export const player1 = ({ player_1, player_2 }) => {
    return {
        type: "PLAYER1",
        p1serving: player_1.serving ? true : false,
        winner: player_1.won ? 1 : 0
    };
};

export const player2 = ({ player_1, player_2 }) => {
    return {
        type: "PLAYER2",
        p1serving: player_1.serving ? true : false,
        winner: player_2.won ? 2 : 0
    };
};

export const language = () => {
    return {
        type: "LANGUAGE"
    };
};

export const reset = () => {
    return {
        type: "RESET"
    };
};

export const saveSettings = ({ id, player_1, player_2, winning_score, change_serve }) => {

    return {
        type: "SAVE_SETTINGS", 
        settings: { 
            id: id, 
            p1name: player_1.name, 
            p2name: player_2.name, 
            score: winning_score,
            alternate: change_serve 
        }
    };
};

export const loaded = (data) => {
    return {
        type: "LOADED",
        history: data
    };
};

export const updateHistory = (data) => {
    return {
        type: "LOADED", 
        history: data
    };
};

