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
      <div className="content-header">
        <ItemComic comic={comic}></ItemComic>
        <div className="content-right">
          <h1 className="white">{comic.title}</h1>
          <div className="label white">${comic.prices.price}</div>
        </div>
      </div>
      <div className="content-body">
        <div className="label white">Description</div>
        <div className="text-body white">{comic.description}</div>
        <div className="content-creators">
          {comic.creators.map((val, i) => (
            <div className="creator" key={i}>
              <div className="label white creator__title">{val.role}</div>
              <div className="text-body white creator__name">{val.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

const mapStateToProps = state => ({
  comic: state.catalog.comicDetail
});

export default connect(mapStateToProps)(Detail);
