import { LOAD_ALL_COMICS, FILTER_COMICS, SELECT_COMIC } from './actionsTypes';
import MarvelApI from '../../services/MarvelApi';
import Adapter from '../../services/Adapter';

export const loadAllComics = (page, order = '') => async (dispatch, getState) => {
  callApiAction({ page: page, orderBy: order }, LOAD_ALL_COMICS)(dispatch, getState).then(res =>
    dispatch(res)
  );
};

export const filterResults = (page, name) => async (dispatch, getState) => {
  callApiAction({ page: page, titleStartsWith: name }, FILTER_COMICS)(dispatch, getState).then(
    res => {
      dispatch({
        ...res,
        payload: name
      });
    }
  );
};

export const selectComic = comic => ({
  type: SELECT_COMIC,
  payload: comic
});

const callApiAction = (options, dispatcher) => async (dispatch, getState) => {
  dispatch({ type: dispatcher.REQUEST, payload: options.titleStartsWith });
  const json = await MarvelApI.getComics(options)
    .then(res => res.json())
    .catch(error => {
      dispatch({ type: dispatcher.FAILURE, message: error.message });
    });
  const { results, total, offset, count } = json.data;
  return Promise.resolve({
    type: dispatcher.SUCCESS,
    comics: results.map(r => Adapter.comicAdapter(r)),
    total: total,
    page: offset + 1,
    orderBy: options.orderBy || '',
    hasMore: Boolean(total > count && offset < total)
  });
};
