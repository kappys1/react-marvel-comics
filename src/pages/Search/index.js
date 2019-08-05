import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../../components/SearchBar';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import { filterResults } from '../../modules/catalog/actions';
import ItemSearchComic from '../../components/ItemSearchComic';

const Search = ({ isShowing, hide, comicsFilter }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const loadPage = name => {
    dispatch(filterResults(page, name));
  };

  const handleChangeInput = name => {
    if (name.length >= 3) {
      loadPage(name);
    }
    console.log(name);
  };

  const comicsSearchItems = () => {
    console.log(comicsFilter);
    return comicsFilter.items.map((val, i) => {
      return <ItemSearchComic key={i} comic={val}></ItemSearchComic>;
    });
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
                  onChangeInput={handleChangeInput}
                  onClickSearch={handleChangeInput}
                ></SearchBar>
                <div className="content-search">{comicsSearchItems()}</div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

const mapStateToProps = state => ({
  comicsFilter: state.catalog.comicsFilter
});

const mapDispathToProps = {
  filterResults
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Search);
