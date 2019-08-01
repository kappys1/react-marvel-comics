import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catalog from './modules/catalog';
export default function configureStore() {
  const appReducer = combineReducers({
    catalog
  });
  return createStore(appReducer, applyMiddleware(thunk));
}
