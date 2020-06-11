import { connect } from 'react-redux'; 
import { getGames } from '../../data/actions/api'; 

import Loading from './Loading'; 

const mapStateToProps = state => {
    return {
        loaded: state.loaded
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleLoad: () => dispatch(getGames()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading); 


