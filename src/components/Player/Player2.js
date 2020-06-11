import { connect } from 'react-redux'; 
import { player2 } from '../../data/actions/state';

import Player from './Player'; 

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
        handlePlayer: () => dispatch(player2())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player); 