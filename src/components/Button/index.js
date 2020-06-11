import { connect } from 'react-redux'; 
import { reset } from '../../data/actions/state'; 

import Button from './Button'; 

/* importing history */
import history from '../../history';  

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => { dispatch(reset()); 
            history.push('/')
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button); 


