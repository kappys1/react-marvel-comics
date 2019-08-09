import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../../components/SearchBar';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import { filterResults } from '../../modules/catalog/actions';
import ItemSearchComic from '../../components/ItemSearchComic';
import useInfiniteScroll from './useInfiniteScroll';

const Search = ({ isShowing, hide, onClickItem, comicsFilter, status }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [name, setName] = useState(comicsFilter.filter);
  const listRef = useRef(null);
  const [isFetching, setIsFetching, setListRef] = useInfiniteScroll(handleScroll);
  const isLoading = status.isSearching && status.isNewSearch;

  useEffect(() => {
    if (listRef.current) {
      setListRef(listRef);
    }
  }, [isShowing, setListRef]);

  useEffect(() => {
    console.log('finish');
    setIsFetching(false);
  }, [comicsFilter.items, setIsFetching]);

  const handleChangeInput = name => {
    if (name.length >= 3) {
      setPage(1);
      setName(name);
      dispatch(filterResults(page, name));
    }
  };

  function handleScroll() {
    if (comicsFilter.hasMore) {
      setPage(page + 1);
      console.log(page);
      dispatch(filterResults(page + 1, name));
    }
  }

  function handleClickItem(e) {
    if (onClickItem) {
      onClickItem(e);
    }
  }

  const comicsSearchItems = () => {
    if (comicsFilter.items.length) {
      return comicsFilter.items.map((val, i) => (
        <ItemSearchComic onClick={() => handleClickItem(val)} key={i} comic={val}></ItemSearchComic>
      ));
    } else {
      return <div className="no-content">No results</div>;
    }
  };

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <i aria-hidden="true" className="icon-close"></i>
                </button>
              </div>
              <div className="modal-body">
                <SearchBar
                  value={name}
                  onChangeInput={handleChangeInput}
                  onClickSearch={handleChangeInput}
                ></SearchBar>
                <div className="container-search" ref={listRef}>
                  {!isLoading ? (
                    comicsSearchItems()
                  ) : (
                    <div className="container-search content-loading">
                      <i className="icon-loading"></i>
                    </div>
                  )}
                  {isFetching ? (
                    <div>
                      <i className="icon-loading"></i>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

const mapStateToProps = state => ({
  comicsFilter: state.catalog.comicsFilter,
  status: state.catalog.status
});

const mapDispathToProps = {
  filterResults
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Search);
