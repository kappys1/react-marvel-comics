import React, { useState, useEffect } from 'react';
import { loadAllComics } from '../../modules/catalog/actions';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import useSearch from '../../pages/Search/useSearch';
import Search from '../../pages/Search';

function Home({ comics }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { isShowing, toggle } = useSearch();

  const loadPage = () => {
    dispatch(loadAllComics(page));
  };

  const handleSlidePage = slide => {
    const thresholdUpdate = 3;
    if (slide + thresholdUpdate === comics.items.length) {
      setPage(page + 1);
      loadPage();
    }
  };

  const handleClickSearch = () => {
    toggle();
  };

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <Header className="Header--mini" onClickSearch={handleClickSearch}></Header>
      <Carousel items={comics} onSlideChange={slide => handleSlidePage(slide)}></Carousel>
      <Search isShowing={isShowing} hide={toggle} />
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
