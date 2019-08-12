import { LOAD_ALL_COMICS, FILTER_COMICS, SELECT_COMIC } from './actionsTypes';

const INITIAL_STATE = {
  status: {
    isLoading: false,
    isSearching: false,
    isInDetail: false,
    isNewSearch: false
  },
  comicDetail: {
    id: -1,
    title: '',
    description: '',
    thumbnail: '',
    price: '',
    dates: {},
    creators: []
  },
  comics: {
    hasMore: true,
    page: 1,
    orderBy: '',
    items: [],
    original: [],
    count: 12,
    total: 0
  },
  comicsFilter: {
    hasMore: true,
    items: [],
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
        status: {
          ...state.status,
          isLoading: true
        },
        comics: {
          ...state.comics
        }
      };
    case LOAD_ALL_COMICS.SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false
        },
        comics: {
          ...state.comics,
          total: action.total,
          hasMore: action.hasMore,
          page: action.page,
          orderBy: action.orderBy,
          items:
            action.orderBy !== state.comics.orderBy
              ? action.comics
              : state.comics.items.concat(action.comics),
          original: state.comics.items
        }
      };
    case LOAD_ALL_COMICS.FAILURE:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false
        },
        comics: {
          ...state.comics,
          items: action.comics
        }
      };
    case FILTER_COMICS.REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: false,
          isSearching: true,
          isNewSearch: state.comicsFilter.filter !== action.payload
        },
        comicsFilter: {
          ...state.comicsFilter,
          filter: action.payload
        }
      };
    case FILTER_COMICS.SUCCESS:
      return {
        ...state,
        status: {
          ...state.status,
          isSearching: false
        },
        comicsFilter: {
          ...state.comicsFilter,
          total: action.total,
          items: !state.status.isNewSearch
            ? state.comicsFilter.items.concat(action.comics)
            : action.comics,
          hasMore: action.hasMore,
          filter: action.payload,
          original: state.comicsFilter.items
        }
      };
    case FILTER_COMICS.CANCEL:
      return {
        ...state,
        status: {
          ...state.status,
          isSearching: false
        },
        comicsFilter: {
          ...state.comicsFilter,
          filter: '',
          items: state.comicsFilter.original
        }
      };
    case SELECT_COMIC:
      return {
        ...state,
        comicDetail: action.payload,
        status: {
          ...state.status,
          isInDetail: action.payload.id
        }
      };
    default:
      return state;
  }
};
