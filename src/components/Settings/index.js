import { connect } from 'react-redux'; 
import history from '../../history'; 

// import api action 
import { postGame } from '../../data/actions/api'; 

import Settings from './Settings'; 

const mapStateToProps = state => {
    return {
        p1name: state.settings.p1name,
        p2name: state.settings.p2name,
        score: state.settings.score, 
        alternate: state.settings.alternate
    };
};

const mapDispatchToProps = dispatch => {
        return {
            handleSave: data => { dispatch(postGame(data));
            history.push('/pongping')
        }, 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings); 


