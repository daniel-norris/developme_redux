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

export const saveSettings = (data) => {

    let api = {...data}; 
    let p1name = api.player_1.name; 
    let p2name = api.player_2.name; 
    let score = api.winning_score; 
    let alternate = api.change_serve;   
    
    return {
        type: "SAVE_SETTINGS", 
        settings: { 
            p1name: p1name, 
            p2name: p2name, 
            score: score, 
            alternate: alternate }
    };
};

