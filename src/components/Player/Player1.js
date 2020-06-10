import { connect } from 'react-redux'; 
import { player1 } from '../../data/actions';

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
        handlePlayer: () => dispatch(player1())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player); 