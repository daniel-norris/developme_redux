import { connect } from 'react-redux'; 

import Player from './Player'; 
import { patchScore } from '../../data/actions/api';

const mapStateToProps = ({ settings, isEnglish, winner, player1, p1serving }) => {
    return {
        name: settings.p1name, 
        winner: winner,
        score: player1,
        serving: p1serving,
        isEnglish: isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch(patchScore(1))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player); 