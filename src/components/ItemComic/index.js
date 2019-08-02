import React from 'react';
import './index.scss';

function ItemComic({ comic }) {
  return (
    <div className="ItemComic">
      {console.log(comic)}
      <img className="ItemComic__image" src={comic.thumbnail} alt="ItemComic" />
      <h1>{comic.title}</h1>
      <div className="body"></div>
    </div>
  );
}

export default ItemComic;
