import { connect } from 'react-redux'; 

import Player from './Player'; 

const mapStateToProps = state => {
    return {
        winner: state.winner,
        score: state.player1,
        serving: state.p1serving
    };
};

export default connect(mapStateToProps)(Player); 