import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import catalog from './catalog';
import carousel from './carousel';

const rootReducer = history =>
  combineReducers({
    catalog: catalog,
    carousel: carousel,
    router: connectRouter(history)
  });

export default rootReducer;
