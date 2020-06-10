import { connect } from 'react-redux'; 

import Player from './Player'; 

const mapStateToProps = ({ isEnglish, winner, player1, p1serving }) => {
    return {
        winner: winner,
        score: player1,
        serving: p1serving,
        isEnglish: isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch({ type: "PLAYER1" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player); 