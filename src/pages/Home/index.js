import React, { useState, useEffect } from 'react';
import { loadAllComics, selectComic } from '../../modules/catalog/actions';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import useSearch from '../../pages/Search/useSearch';
import Search from '../../pages/Search';
import Detail from '../../pages/Detail';

function Home({ comics, status }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [slide, setSlide] = useState(0);
  const { isShowing, toggle } = useSearch();

  const loadPage = () => {
    dispatch(loadAllComics(page));
  };

  const handleSlidePage = actualSlide => {
    const thresholdUpdate = 2;
    if (actualSlide + thresholdUpdate >= comics.items.length && !status.isLoading) {
      setPage(page + 1);
      loadPage();
    }
    setSlide(actualSlide);
  };

  const handleClickSearch = () => {
    toggle();
  };

  const handleClickItemSearch = comic => {
    toggle();
    dispatch(selectComic(comic));
  };

  const handleClickItemCarousel = comic => {
    dispatch(selectComic(comic));
  };

  const handleClickBack = () => {
    dispatch(selectComic({}));
  };

  useEffect(() => {
    loadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <Header
        className="Header--mini"
        showBackButton={status.isInDetail}
        onClickBack={handleClickBack}
        onClickSearch={handleClickSearch}
      ></Header>
      {!status.isInDetail ? (
        <Carousel
          initSlide={slide}
          items={comics}
          onClickItemComic={handleClickItemCarousel}
          onSlideChange={handleSlidePage}
        ></Carousel>
      ) : (
        <Detail items={comics} onSlideChange={handleSlidePage}></Detail>
      )}
      <Search onClickItem={handleClickItemSearch} isShowing={isShowing} hide={toggle} />
    </div>
  );
}

const mapStateToProps = state => ({
  comics: state.catalog.comics,
  status: state.catalog.status
});

const mapDispathToProps = {
  loadAllComics,
  selectComic
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
