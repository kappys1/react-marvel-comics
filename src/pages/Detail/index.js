import React, { useState, useEffect } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import ItemComic from '../../components/ItemComic';

function Detail({ comic }) {
  const [enterAnimation, setEnterAnimation] = useState('');

  useEffect(() => {
    setTimeout(() => setEnterAnimation('animate'), 100);
  }, []);

  const contentBody = (
    <>
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
    </>
  );
  return comic ? (
    <div className={`Detail-page ${enterAnimation}`}>
      <div className="content-left">
        <ItemComic comic={comic}></ItemComic>
      </div>
      <div className="content-right">
        <h1 className="white">{comic.title}</h1>
        <div className="label white">$ {comic.price}</div>
        <div className="content-body">{contentBody}</div>
      </div>
      <div className="content-body">{contentBody}</div>
    </div>
  ) : (
    ''
  );
}

const mapStateToProps = state => ({
  comic: state.catalog.comicDetail
});

export default connect(mapStateToProps)(Detail);
