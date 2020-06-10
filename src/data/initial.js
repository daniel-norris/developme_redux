
// initial state goes here for entire app 

// initialise a state object with initial values 

const initial = {
    settings: {
        p1name: "", 
        p2name: "",
        score: 0,
        alternate: 0 
    }, 
    player1: 0,
    player2: 0,
    p1serving: true, 
    winner: 0,
    isEnglish: true, 
    history: []

};

export default initial; 