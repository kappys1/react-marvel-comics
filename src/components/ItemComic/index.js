import React from 'react';
import './index.scss';
import Image from '../Image';

function ItemComic({ comic, onClick, className }) {
  const handleClick = () => onClick(comic);
  return (
    <div className={`ItemComic ${className}`} onClick={handleClick}>
      <Image
        className="ItemComic__image"
        thumbnail_small={comic.thumbnail_small}
        thumbnail={comic.thumbnail}
      ></Image>
      <h1 className="white">{comic.title}</h1>
      <div className="text-body white">${comic.price}</div>
    </div>
  );
}

ItemComic.defaultProps = {
  comic: {
    thumbnail: '',
    title: '',
    price: '??'
  },
  className: '',
  onClick: comic => {}
};

export default ItemComic;
