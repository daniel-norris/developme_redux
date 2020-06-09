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

export default connect(mapStateToProps)(Player); 