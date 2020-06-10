import { connect } from 'react-redux'; 
import { saveSettings } from '../../data/actions'; 
import history from '../../history'; 

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
            handleSave: data => { dispatch(saveSettings(data)); history.push('/pongping')
        }, 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings); 


