import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ItemComic from '../../components/ItemComic';
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import './index.scss';

function Carousel({ items }) {
  const handleOnDragStart = e => {
    console.log(e);
  };

  const handleSlideChange = e => {
    console.log(e);

    console.debug('Item`s position during a change: ', e.item);
    console.debug('Slide`s position during a change: ', e.slide);
  };
  const aliceItems = items.items.map((val, i) => {
    console.log(val);
    return <ItemComic key={i} comic={val}></ItemComic>;
  });
  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
    // variableWidth: true
  };
  return <Slider {...settings}>{aliceItems}</Slider>;
}

export default Carousel;
