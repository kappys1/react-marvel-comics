import React from 'react';
import { loadAllComics } from '../../modules/catalog/actions';
import './Home.scss';
import { connect, useDispatch } from 'react-redux';
import Logo from '../../components/Logo';
import Carousel from '../../components/Carousel';

function Home({ comics }) {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loadAllComics(1));
  };

  return (
    <div>
      <Logo className="Logo--mini"></Logo>
      <Carousel items={comics}></Carousel>
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
}

const mapStateToProps = state => ({
  comics: state.catalog.comics
});

const mapDispathToProps = {
  loadAllComics
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
