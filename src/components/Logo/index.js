import React from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';

function Logo() {
  return (
    <div className="Logo">
      <img src={logo} alt="Logo" />
      <div className="Logo-subtitle">Comics</div>
    </div>
  );
}

export default Logo;
