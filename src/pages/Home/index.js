import React, { useState, lazy, Suspense } from 'react';
import { loadAllComics, selectComic } from '../../modules/catalog/actions';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import SidebarElm from '../../pages/Sidebar';
import useSearch from '../../pages/Search/useSearch';
import Sidebar from 'react-sidebar';
import routes from '../../routes';
import { ConnectedRouter } from 'connected-react-router';
const Search = lazy(() => import('../../pages/Search'));

function Home({ comics, status, history, pathname }) {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isShowing, toggle } = useSearch();
  const isFirstLoading = comics.items.length === 0 && status.isLoading;

  const handleClickItemSearch = comic => {
    toggle();
    dispatch(selectComic(comic));
    history.push('/detail');
  };

  const handleClickRightIcon = () => {
    toggle();
  };

  const handleClickLeftIcon = () => {
    if (status.isInDetail) {
      history.goBack();
      setTimeout(() => {
        dispatch(selectComic({ creators: [] }));
      });
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
        <Suspense fallback={<>Loading...</>}>
          <ConnectedRouter history={history}>{routes}</ConnectedRouter>
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
  status: state.catalog.status,
  pathname: state.router.location.pathname
});

const mapDispathToProps = {
  loadAllComics,
  selectComic
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
