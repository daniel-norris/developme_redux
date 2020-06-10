import { connect } from 'react-redux'; 
import { saveSettings } from '../../data/actions'; 
import history from '../../history'; 

import Settings from './Settings'; 

const mapStateToProps = state => {
    return {
        settings: state
    };
};

const mapDispatchToProps = dispatch => {
        return {
            handleSave: data => { dispatch(saveSettings(data)); history.push('/pongping')
        }, 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings); 


