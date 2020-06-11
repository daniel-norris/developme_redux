import { connect } from 'react-redux'; 

import Player from './Player'; 
import { patchScore } from '../../data/actions/api';

const mapStateToProps = ({ settings, isEnglish, winner, player2, p1serving }) => {
    return {
        name: settings.p2name,
        winner: winner,
        score: player2,
        serving: !p1serving,
        isEnglish: isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handlePlayer: () => dispatch(patchScore(2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player); 