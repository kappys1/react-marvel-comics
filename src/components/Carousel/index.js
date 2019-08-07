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
  const [enterAnimation, setEnterAnimation] = useState('');
  const carouselItems = items.items.map((val, i) => {
    return (
      <div className="carousel-slide" key={i}>
        <ItemComic onClick={() => handleClickItemComic(val, i)} comic={val}></ItemComic>
      </div>
    );
  });

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentSlide);
    }
  }, [currentSlide]);

  useEffect(() => {
    console.log(swiper);
    if (swiper) {
      setTimeout(() => setEnterAnimation('animate'), 100);
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
    setCurrentSlide(next);
  };

  const settings = {
    grabCursor: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,
    initialSlide: currentSlide,
    shouldSwiperUpdate: true
  };

  return (
    <Swiper
      containerClass={`swiper-container ${enterAnimation}`}
      {...settings}
      getSwiper={setSwiper}
    >
      {carouselItems}
    </Swiper>
  );
}

export default Carousel;
