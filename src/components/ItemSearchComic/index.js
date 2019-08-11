import React from 'react';
import './index.scss';

function ItemSearchComic({ comic = {}, onClick }) {
  const handleClick = () => (onClick ? onClick(comic) : null);
  return (
    <div className="ItemSearchComic" onClick={handleClick}>
      <img className="ItemSearchComic__image" src={comic.thumbnail} alt="ItemComic" />
      <div className="ItemSearchComic__description">
        <h1 className="white">{comic.title}</h1>
        <div className="body white"></div>
      </div>
    </div>
  );
}

ItemSearchComic.defaultProps = {
  comic: {}
};

export default ItemSearchComic;
