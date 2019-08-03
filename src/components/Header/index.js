import React from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';

function Header({ className }) {
  return (
    <div className={`Header ${className}`}>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
