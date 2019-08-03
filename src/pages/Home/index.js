import React, { useState, useEffect } from 'react';
import { loadAllComics } from '../../modules/catalog/actions';
import './Home.scss';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

function Home({ comics }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const loadPage = () => {
    dispatch(loadAllComics(page));
  };

  const handleSlidePage = slide => {
    const thresholdUpdate = 3;
    console.log(slide);
    if (slide + thresholdUpdate === comics.items.length) {
      setPage(page + 1);
      loadPage();
    }
  };

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <Header className="Header--mini"></Header>
      <Carousel items={comics} onSlideChange={slide => handleSlidePage(slide)}></Carousel>
    </div>
  );
}

const mapStateToProps = state => ({
  comics: state.catalog.comics
});

const mapDispathToProps = {
  loadAllComics
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
