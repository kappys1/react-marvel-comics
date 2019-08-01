const TYPES = ['REQUEST', 'SUCCESS', 'FAILURE', 'CANCEL', 'RESET'];

const makeActionTypes = base => {
  const ref = {};

  TYPES.forEach(type => {
    ref[type] = `${base}_${type}`;
  });

  return ref;
};

export const LOAD_ALL_COMICS = makeActionTypes('LOAD_ALL_COMICS');
export const FILTER_COMICS = makeActionTypes('FILTER_COMICS');
export const CHANGE_FILTER = 'CHANGE_FILTER';
