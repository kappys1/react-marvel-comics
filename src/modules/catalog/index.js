import { LOAD_ALL_COMICS } from './actionsTypes';

const INITIAL_STATE = {
  comics: {
    hasMore: true,
    isLoading: false,
    isSearching: false,
    items: [],
    itemsFilter: [],
    original: [],
    count: 12,
    total: 0,
    filter: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_ALL_COMICS.REQUEST:
      return {
        ...state,
        comics: {
          ...state.comics,
          isLoading: true
        }
      };
    case LOAD_ALL_COMICS.SUCCESS:
      return {
        ...state,
        comics: {
          ...state.comics,
          isLoading: false,
          total: action.total,
          hasMore: action.hasMore,
          items: [...state.comics.items, ...action.comics],
          original: state.comics.items
        }
      };
    case LOAD_ALL_COMICS.FAILURE:
      return {
        ...state,
        comics: {
          ...state.comics,
          isLoading: false,
          items: action.comics
        }
      };
    default:
      return state;
  }
};
