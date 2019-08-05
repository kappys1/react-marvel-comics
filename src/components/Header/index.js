import React from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';

function Header({ className, onClickSearch }) {
  return (
    <div className={`Header ${className}`}>
      <div className="col col__left"></div>
      <img src={logo} alt="Logo" />
      <div className="col col__right">
        <i className="icon-search" onClick={e => onClickSearch()}></i>
      </div>
    </div>
  );
}

export default Header;
