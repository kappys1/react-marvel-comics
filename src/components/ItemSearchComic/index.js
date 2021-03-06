import React from 'react';
import './index.scss';

function ItemSearchComic({ comic, onClick }) {
  const handleClick = () => onClick(comic);
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
  comic: {
    title: '',
    thumbnail: '',
    id: -1
  },
  onClick: comic => {}
};

export default ItemSearchComic;
