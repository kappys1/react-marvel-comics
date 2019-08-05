import React from 'react';
import './index.scss';

function ItemSearchComic({ comic }) {
  return (
    <div className="ItemSearchComic">
      <img className="ItemSearchComic__image" src={comic.thumbnail} alt="ItemComic" />
      <div className="ItemSearchComic__description">
        <h1 className="white">{comic.title}</h1>
        <div className="body white"></div>
      </div>
    </div>
  );
}

export default ItemSearchComic;
