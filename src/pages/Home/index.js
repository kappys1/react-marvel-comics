import React, { useState, lazy, Suspense } from 'react';
import { loadAllComics, selectComic } from '../../modules/catalog/actions';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import useSearch from '../../pages/Search/useSearch';
const Search = lazy(() => import('../../pages/Search'));
const Detail = lazy(() => import('../../pages/Detail'));

function Home({ comics, status }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [slide, setSlide] = useState(0);
  const { isShowing, toggle } = useSearch();
  const isFirstLoading = comics.items.length === 0 && status.isLoading;

  const loadPage = () => {
    dispatch(loadAllComics(page));
  };

  const handleSlidePage = actualSlide => {
    const thresholdUpdate = 4;
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

  return (
    <div className={`page ${status.isInDetail ? 'page__detail' : 'page__home'}`}>
      <Header
        className={`Header ${isFirstLoading ? 'Header--loading' : 'Header--mini'}`}
        showBackButton={status.isInDetail}
        onClickBack={handleClickBack}
        onClickSearch={handleClickSearch}
      ></Header>
      <Suspense fallback={<></>}>
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
      </Suspense>
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
