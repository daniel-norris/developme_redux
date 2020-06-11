import { connect } from 'react-redux'; 
import { language } from '../../data/actions/state'; 

import Language from './Language'; 

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleLanguageChange: () => dispatch(language()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Language); 
