import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/upperBar/upperBarStyles.css';

const UpperBar = () => {
    return (
        <div id="upper-bar">
            <div id="text-section">
                <p id="balance-label">My balance</p>
                <p id="balance">$921.48</p>
            </div>
            <img src='images/logo.svg' alt='logo' id="logo"></img>
        </div>
    );
};


UpperBar.propTypes = {
    
};


export default UpperBar;
