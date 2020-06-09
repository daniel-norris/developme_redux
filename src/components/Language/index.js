import { connect } from 'react-redux'; 

import Language from './Language'; 

const mapStateToProps = state => {
    return {
        isEnglish: state.isEnglish
    };
};

export default connect(mapStateToProps)(Language); 