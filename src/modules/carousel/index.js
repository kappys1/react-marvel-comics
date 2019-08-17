import { CHANGE_CURRENT_SLIDER } from './actionsTypes';

const INITIAL_STATE = {
  currentSlide: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_SLIDER:
      return {
        ...state,
        currentSlide: action.payload
      };
    default:
      return state;
  }
};
