import { connect } from 'react-redux'; 
import { player2 } from '../../data/actions';

import Player from './Player'; 

const mapStateToProps = ({ isEnglish, winner, player2, p1serving }) => {
    return {
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