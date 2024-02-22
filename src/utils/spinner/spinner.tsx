import React from 'react';
import '../../scss/_spinner.scss';

const Spinner: React.FC = () => {
    return (
        <div className="spinner-overlay">
            <div className="spinner"></div>
            <div className="spinner-text">Converting...</div>
        </div>
    );
};

export default Spinner;
