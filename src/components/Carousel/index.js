import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ItemComic from '../../components/ItemComic';
import './index.scss';

function Carousel({ items, initSlide, onSlideChange, onClickItemComic }) {
  const speedTransition = 700;
  const carousel = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(initSlide);
  const carouselItems = items.items.map((val, i) => {
    return (
      <ItemComic
        className={i === currentSlide ? 'active' : ''}
        onClick={() => handleClickItemComic(val, i)}
        key={i}
        comic={val}
      ></ItemComic>
    );
  });

  useEffect(() => {
    carousel.current.slickGoTo(currentSlide, true);
  }, []);

  const handleClickItemComic = (comic, i) => {
    const current = items.items[currentSlide];
    if (comic.id === current.id) {
      if (onClickItemComic) {
        onClickItemComic(comic);
      }
    } else {
      carousel.current.slickGoTo(i);
      setTimeout(() => {
        onClickItemComic(comic);
      }, speedTransition);
    }
    setCurrentSlide(i);
  };

  const handleSlideChange = next => {
    if (onSlideChange) {
      onSlideChange(next);
    }
    setCurrentSlide(next);
  };

  const settings = {
    className: 'slider',
    dots: false,
    infinite: false,
    speed: speedTransition,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (current, next) => handleSlideChange(next)
  };

  return (
    <Slider ref={carousel} {...settings}>
      {carouselItems}
    </Slider>
  );
}

export default Carousel;
