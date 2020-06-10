import { connect } from 'react-redux'; 

import Settings from './Settings'; 

const mapStateToProps = state => {
    return {
        p1name: state.p1name
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         handleReset: () => dispatch({ type: "RESET" })
//     }
// }

export default connect(mapStateToProps)(Settings); 


