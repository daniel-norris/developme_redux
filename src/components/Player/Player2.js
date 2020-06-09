import { connect } from 'react-redux'; 

import Player from './Player'; 

const mapStateToProps = ({ winner, player2, p1serving }) => {
    return {
        winner: winner,
        score: player2,
        serving: !p1serving
    };
};

export default connect(mapStateToProps)(Player); 