import React, { useState } from 'react';
import './index.scss';

function SearchBar({ value, placeholder, className, onClickSearch, onChangeInput }) {
  const [name, setName] = useState(value);

  const handleSubmit = e => {
    onClickSearch(name);
    e.preventDefault();
  };

  const handleChangeInput = e => {
    setName(e.target.value);
    onChangeInput(e.target.value);
    e.preventDefault();
  };

  return (
    <div className={`SearchBar ${className}`}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            autoFocus
            type="text"
            value={name}
            onChange={handleChangeInput}
            placeholder={placeholder}
          />
        </label>
      </form>
    </div>
  );
}

SearchBar.defaultProps = {
  value: '',
  placeholder: '',
  className: '',
  onClickSearch: value => {},
  onChangeInput: value => {}
};

export default SearchBar;
