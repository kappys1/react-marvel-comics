import React from 'react';
import { loadAllComics } from './modules/catalog/actions';
import './App.scss';
import { connect, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="App">Alex</div>
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
)(App);
