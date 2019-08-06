import React, { useState, useEffect } from 'react';
import { selectComic } from '../../modules/catalog/actions';
import './index.scss';
import { connect, useDispatch } from 'react-redux';
import ItemComic from '../../components/ItemComic';

function Detail({ comic }) {
  const [enterAnimation, setEnterAnimation] = useState('');

  useEffect(() => {
    console.log(comic);
    setEnterAnimation('animate');
  }, []);

  return comic ? (
    <div className={`Detail-page page ${enterAnimation}`}>
      <ItemComic comic={comic}></ItemComic>
    </div>
  ) : (
    ''
  );
}

const mapStateToProps = state => ({
  comic: state.catalog.comicDetail
});

export default connect(mapStateToProps)(Detail);
