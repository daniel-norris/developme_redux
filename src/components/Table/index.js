import { connect } from 'react-redux'; 

import Table from './Table'; 
import { deleteGame } from '../../data/actions/api';

const mapStateToProps = state => {
    return {
        history: state.history
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: id => dispatch(deleteGame(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table); 