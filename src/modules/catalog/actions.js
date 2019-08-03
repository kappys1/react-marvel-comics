import { LOAD_ALL_COMICS, FILTER_COMICS } from './actionsTypes';
import MarvelApI from '../../services/MarvelApi';
import Adapter from '../../services/Adapter';

export const loadAllComics = page => async (dispatch, getState) => {
  callApiAction({ page: page }, LOAD_ALL_COMICS)(dispatch, getState);
};

export const filterResults = (page, name) => async (dispatch, getState) => {
  callApiAction({ page: page, nameStartsWith: name }, FILTER_COMICS)(dispatch, getState);
};

const callApiAction = (options, dispatcher) => async (dispatch, getState) => {
  dispatch({ type: dispatcher.REQUEST });
  const json = await MarvelApI.getComics(options)
    .then(res => res.json())
    .catch(error => {
      dispatch({ type: dispatcher.FAILURE, message: error.message });
    });
  const { results, total, offset, count } = json.data;
  console.log(results, total, offset, count);
  dispatch({
    type: dispatcher.SUCCESS,
    comics: results.map(r => Adapter.comicAdapter(r)),
    total: total,
    hasMore: Boolean(total > count && offset < total)
  });
};
