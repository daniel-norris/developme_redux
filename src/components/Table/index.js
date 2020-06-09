import { connect } from 'react-redux'; 

import Table from './Table'; 

const mapStateToProps = state => {
    return {
        history: state.history
    };
};

export default connect(mapStateToProps)(Table); 