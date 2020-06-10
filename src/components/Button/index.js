import { connect } from 'react-redux'; 

import Button from './Button'; 

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => dispatch({ type: "RESET" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button); 


