import React, { useState, useEffect } from 'react';
import 'swiper/dist/css/swiper.min.css';
import 'react-id-swiper/lib/styles/scss/swiper.scss';

import Swiper from 'react-id-swiper';
import ItemComic from '../../components/ItemComic';
import './index.scss';

function Carousel({ items, initSlide, onSlideChange, onClickItemComic }) {
  const speedTransition = 700;
  const [swiper, setSwiper] = useState();
  const [currentSlide, setCurrentSlide] = useState(initSlide);
  const carouselItems = items.items.map((val, i) => {
    return (
      <div className="carousel-slide" key={i}>
        <ItemComic onClick={() => handleClickItemComic(val, i)} comic={val}></ItemComic>
      </div>
    );
  });

  useEffect(() => {
    console.log(swiper);
    if (swiper) {
      swiper.on('slideChange', handleSlideChange);
    }
  }, [swiper]);

  const handleClickItemComic = (comic, i) => {
    const currentSlide = swiper.activeIndex;
    const current = items.items[currentSlide];
    if (comic.id === current.id) {
      if (onClickItemComic) {
        onClickItemComic(comic);
      }
    } else {
      swiper.slideTo(i);
      setTimeout(() => onClickItemComic(comic), speedTransition);
    }
    setCurrentSlide(i);
  };

  const handleSlideChange = () => {
    const next = swiper.activeIndex;
    if (onSlideChange) {
      onSlideChange(next);
    }
    setCurrentSlide(next);
  };

  const settings = {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: currentSlide,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    shouldSwiperUpdate: true,
    lazy: true
  };

  return (
    <Swiper {...settings} getSwiper={setSwiper}>
      {carouselItems}
    </Swiper>
  );
}

export default Carousel;
