import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ItemComic from '../../components/ItemComic';
import './index.scss';

function Carousel({ items, onSlideChange }) {
  const carouselItems = items.items.map((val, i) => {
    return <ItemComic key={i} comic={val}></ItemComic>;
  });

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    centerMode: true,
    draggable: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => onSlideChange(next)
  };
  return <Slider {...settings}>{carouselItems}</Slider>;
}

export default Carousel;
