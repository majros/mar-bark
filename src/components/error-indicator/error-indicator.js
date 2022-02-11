import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="boom">Something has gone wrong</span>
            <span>(but we already fixing)</span>
        </div>
    );
};

export default ErrorIndicator;