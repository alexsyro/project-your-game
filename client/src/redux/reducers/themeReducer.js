import { CREATE_THEMES, SET_ANSWERED } from '../actionTypes/actionTypes';

const initialSate = { theme: {} };

function themeReducer(state = initialSate, action) {
  switch (action.type) {
    case CREATE_THEMES:
      return { theme: { ...action.payload } };

    case SET_ANSWERED:
      return { SET_ANSWERED };

    default:
      return state;
  }
}

export default themeReducer;
