import React from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';

function Header({ className, showBackButton, onClickSearch, onClickBack }) {
  return (
    <div className={`Header ${className}`}>
      <div className="col col__left">
        {showBackButton ? <i className="icon-close" onClick={onClickBack}></i> : ''}
      </div>
      <img src={logo} alt="Logo" />
      <div className="col col__right">
        <i className="icon-search" onClick={onClickSearch}></i>
      </div>
    </div>
  );
}

export default Header;