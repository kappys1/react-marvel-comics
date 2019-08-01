import React from 'react';
import { loadAllComics } from '../../modules/catalog/actions';
import './Home.scss';
import { connect, useDispatch } from 'react-redux';
import Logo from '../../components/Logo';

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <Logo></Logo>
      <button onClick={() => dispatch(loadAllComics(1))}>Click</button>
    </div>
  );
}

const mapStateToProps = state => ({
  category: state.route
});

const mapDispathToProps = {
  loadAllComics
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Home);
