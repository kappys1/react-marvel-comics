import React, { useState, lazy, Suspense } from 'react';
import { loadAllComics, selectComic } from '../../modules/catalog/actions';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import SidebarElm from '../../pages/Sidebar';
import useSearch from '../../pages/Search/useSearch';
import Sidebar from 'react-sidebar';
const Search = lazy(() => import('../../pages/Search'));
const Detail = lazy(() => import('../../pages/Detail'));
const Carousel = lazy(() => import('../../components/Carousel'));

function Home({ comics, status }) {
  const dispatch = useDispatch();
  const [slide, setSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isShowing, toggle } = useSearch();
  const isFirstLoading = comics.items.length === 0 && status.isLoading;

  const loadPage = () => {
    dispatch(loadAllComics(comics.page + +1, comics.orderBy));
  };

  const handleSlidePage = actualSlide => {
    const thresholdUpdate = 4;
    if (actualSlide + thresholdUpdate >= comics.items.length && !status.isLoading) {
      loadPage();
    }
    setSlide(actualSlide);
  };

  const handleClickItemSearch = comic => {
    toggle();
    dispatch(selectComic(comic));
  };

  const handleClickItemCarousel = comic => {
    dispatch(selectComic(comic));
  };

  const handleClickRightIcon = () => {
    toggle();
  };

  const handleClickLeftIcon = () => {
    if (status.isInDetail) {
      dispatch(selectComic({}));
    } else {
      setSidebarOpen(true);
    }
  };

  return (
    <Sidebar
      sidebar={<SidebarElm></SidebarElm>}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      sidebarClassName="sidebar"
      overlayClassName="overlay"
      styles={{ sidebar: { background: 'white' } }}
    >
      <div className={`page ${status.isInDetail ? 'page__detail' : 'page__home'}`}>
        <Header
          className={`Header ${isFirstLoading ? 'Header--loading' : 'Header--mini'}`}
          iconLeft={`${!status.isInDetail ? 'icon-menu' : 'icon-back'}`}
          IconRight={`icon-search`}
          onClickLeftIcon={handleClickLeftIcon}
          onClickRightIcon={handleClickRightIcon}
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
        <div className={`text-body white copyright ${status.isInDetail ? 'detail' : ''}`}>
          Data provided by Marvel © {new Date().getFullYear()}
        </div>
      </div>
    </Sidebar>
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
