import React, { useState } from 'react';
import './index.scss';
import logo from '../../assets/images/logo.png';

function SearchBar({ className, onClickSearch, onChangeInput }) {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (onClickSearch) {
      onClickSearch(name);
    }
  };

  const handleChangeInput = e => {
    setName(e.target.value);
    if (onChangeInput) {
      onChangeInput(e.target.value);
    }
    e.preventDefault();
  };

  return (
    <div className={`SearchBar`}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            autoFocus
            type="text"
            value={name}
            onChange={handleChangeInput}
            placeholder="Search ..."
          />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
