import React from 'react';
import './index.scss';

function ItemSearchComic({ comic }) {
  return (
    <div className="ItemSearchComic">
      <img className="ItemComic__image" src={comic.thumbnail} alt="ItemComic" />
      <h1 className="white">{comic.title}</h1>
      <div className="body white"></div>
    </div>
  );
}

export default ItemSearchComic;
