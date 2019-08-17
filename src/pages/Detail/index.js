/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import ItemComic from '../../components/ItemComic';

function Detail({ comic, history }) {
  const [enterAnimation, setEnterAnimation] = useState('');

  useEffect(() => {
    if (!comic.id || comic.id === -1) {
      history.push('/');
    } else {
      comic.creators = comic.creators || [];
      setTimeout(() => setEnterAnimation('animate'), 100);
    }
  }, []);

  const renderedContentBody = (
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
  return comic.id ? (
    <div className={`Detail-page ${enterAnimation}`}>
      <div className="content-left">
        <ItemComic comic={comic}></ItemComic>
      </div>
      <div className="content-right">
        <h1 className="white">{comic.title}</h1>
        <div className="label white">
          $ {comic.price} - {comic.pages} Pages
        </div>
        <div className="content-body">{renderedContentBody}</div>
      </div>
      <div className="content-body">{renderedContentBody}</div>
    </div>
  ) : (
    ''
  );
}

const mapStateToProps = state => ({
  comic: state.catalog.comicDetail
});

export default connect(mapStateToProps)(Detail);
