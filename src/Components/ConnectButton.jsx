import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ConnectButton.css';

const ConnectButton = ({ onClick }) => {
  return (
    <button className="connect-button" onClick={onClick}>
      Let's Connect <ArrowForwardIcon className="arrow-icon" />
    </button>
  );
};

export default ConnectButton;