import React, { useRef, useState, useEffect } from 'react';
import './index.scss';

function Image({ thumbnail, thumbnail_small, className }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(function() {
    const img = imgRef.current;
    if (img && img.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <React.Fragment>
      <figure className={className}>
        <div
          className={`blurred ${!loaded ? '' : 'loaded'} `}
          style={{ backgroundImage: `url('${thumbnail_small}')` }}
        />
        <img
          className={`${loaded ? 'loaded' : ''}`}
          ref={imgRef}
          onLoad={() => setLoaded(true)}
          src={thumbnail}
          alt="img-tag"
        />
      </figure>
    </React.Fragment>
  );
}

Image.defaultProps = {
  className: '',
  thumbnail: '',
  thumbnail_small: ''
};

export default Image;
