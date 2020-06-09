import { connect } from 'react-redux'; 

import Winner from './Winner'; 

const mapStateToProps = ({ isEnglish, winner }) => {
    return {
        winner: winner,
        isEnglish: isEnglish
    };
};

export default connect(mapStateToProps)(Winner); 