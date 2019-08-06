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
  const { isShowing, toggle } = useSearch();

  const loadPage = () => {
    dispatch(loadAllComics(page));
  };

  const handleSlidePage = actualSlide => {
    const thresholdUpdate = 0;
    if (actualSlide + thresholdUpdate === comics.items.length) {
      setPage(page + 1);
      loadPage();
    }
  };

  const handleClickSearch = () => {
    toggle();
  };

  const handleClickItemCarousel = comic => {
    console.log(comic);
    dispatch(selectComic(comic));
  };

  const handleClickBack = () => {
    console.log('back');
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
          items={comics}
          onClickItemComic={handleClickItemCarousel}
          onSlideChange={handleSlidePage}
        ></Carousel>
      ) : (
        <Detail items={comics} onSlideChange={handleSlidePage}></Detail>
      )}
      <Search isShowing={isShowing} hide={toggle} />
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
