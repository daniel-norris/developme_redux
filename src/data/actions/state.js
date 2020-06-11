export const player1 = () => {
    return {
        type: "PLAYER1"
    };
};

export const player2 = () => {
    return {
        type: "PLAYER2"
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

