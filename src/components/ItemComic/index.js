import React from 'react';
import './index.scss';

function ItemComic({ comic, onClick, className }) {
  const handleClick = () => (onClick ? onClick(comic) : null);
  return (
    <div className={`ItemComic ${className}`} onClick={handleClick}>
      <img className="ItemComic__image" src={comic.thumbnail} alt="ItemComic" />
      <h1 className="white">{comic.title}</h1>
      <div className="text-body white">${comic.price}</div>
    </div>
  );
}

ItemComic.defaultProps = {
  comic: {},
  className: ''
};

export default ItemComic;
