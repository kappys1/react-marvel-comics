import React from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';

function Header({ className, iconLeft, IconRight, onClickLeftIcon, onClickRightIcon }) {
  return (
    <div className={`Header ${className}`}>
      <div className="col col__left">
        <i className={iconLeft} onClick={onClickLeftIcon}></i>
      </div>
      <div className="col col__center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="col col__right">
        <i className={IconRight} onClick={onClickRightIcon}></i>
      </div>
    </div>
  );
}

export default Header;
