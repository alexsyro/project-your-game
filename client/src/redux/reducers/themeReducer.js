import { CREATE_THEMES, SET_ANSWERED } from '../actionTypes/actionTypes';

const initialSate = { themes: [] };

function themeReducer(state = initialSate, action) {
  switch (action.type) {
    case CREATE_THEMES:
      return { themes: action.payload.themeArray };

    case SET_ANSWERED:
      return { SET_ANSWERED };

    default:
      return state;
  }
}

export default themeReducer;
