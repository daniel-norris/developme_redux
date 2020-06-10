import { connect } from 'react-redux'; 
import { reset } from '../../data/actions'; 

import Button from './Button'; 

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => dispatch(reset())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button); 


