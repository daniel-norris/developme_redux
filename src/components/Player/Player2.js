import { connect } from 'react-redux'; 

import Player from './Player'; 

const mapStateToProps = ({ isEnglish, winner, player2, p1serving }) => {
    return {
        winner: winner,
        score: player2,
        serving: !p1serving,
        isEnglish: isEnglish
    };
};

export default connect(mapStateToProps)(Player); 