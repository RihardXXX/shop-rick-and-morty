import React from 'react';

import './error-indicator.css';

import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className="alert alert-dismissible alert-danger error-message">
      <img src={icon} alt="error-message" />
      <span>Error please 1 hours</span>
    </div>
  );
};

export default ErrorIndicator;
