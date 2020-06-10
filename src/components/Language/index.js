import { connect } from 'react-redux'; 

import Language from './Language'; 

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleLanguageChange: () => dispatch({ type: "LANGUAGE" }) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language); 
