import { connect } from 'react-redux'; 
import { player1 } from '../../data/actions/state';

import Player from './Player'; 

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
        handlePlayer: () => dispatch(player1())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player); 