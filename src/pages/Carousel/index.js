/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { loadAllComics, selectComic } from '../../modules/catalog/actions';
import { changeCurrentSlider } from '../../modules/carousel/actions';
import 'swiper/dist/css/swiper.min.css';
import 'react-id-swiper/lib/styles/scss/swiper.scss';
import Swiper from 'react-id-swiper';
import ItemComic from '../../components/ItemComic';
import './index.scss';

function Carousel({ items, history, currentSlide }) {
  const speedTransition = 700;
  const dispatch = useDispatch();
  const [swiper, setSwiper] = useState();
  const [enterAnimation, setEnterAnimation] = useState('');
  const renderedCarouselItems = items.items.map((val, i) => {
    return (
      <div className="carousel-slide" key={i}>
        <ItemComic onClick={() => handleClickItemComic(val, i)} comic={val}></ItemComic>
      </div>
    );
  });

  useEffect(() => {
    handleSlideChange();
  }, [currentSlide]);

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(0, 0);
    }
  }, [items.orderBy]);

  useEffect(() => {
    if (swiper) {
      setEnterAnimation('animate');
      swiper.on('slideChange', () => {
        const actualSlide = swiper.activeIndex;
        dispatch(changeCurrentSlider(actualSlide));
      });
    }
  }, [swiper]);

  const loadPage = () => {
    dispatch(loadAllComics(items.page + 1, items.orderBy));
  };

  const goToDetail = comic => {
    dispatch(selectComic(comic));
    history.push('/detail');
  };

  const handleSlideChange = () => {
    const thresholdUpdate = 4;
    if (currentSlide + thresholdUpdate >= items.items.length && !items.isLoading) {
      loadPage();
    }
  };

  const handleClickItemComic = (comic, i) => {
    const currentSlide = swiper.activeIndex;
    const current = items.items[currentSlide];
    if (comic.id === current.id) {
      goToDetail(comic);
    } else {
      swiper.slideTo(i, 600);
      setTimeout(() => goToDetail(comic), speedTransition);
    }
    dispatch(changeCurrentSlider(i));
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
      {renderedCarouselItems}
    </Swiper>
  );
}

Carousel.defaultProps = {
  items: [],
  currentSlide: 1
};

const mapDispathToProps = {
  changeCurrentSlider
};

const mapStateToProps = state => ({
  items: state.catalog.comics,
  currentSlide: state.carousel.currentSlide
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Carousel);
