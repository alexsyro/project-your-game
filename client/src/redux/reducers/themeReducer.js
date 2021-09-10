import { CREATE_THEMES, SET_ANSWERED } from '../actionTypes/actionTypes';

const initialSate = { themes: [] };

function themeReducer(state = initialSate, action) {
  switch (action.type) {
    case CREATE_THEMES:
      return { themes: action.payload.themeArray };

    case SET_ANSWERED:
      return {
        ...state,
        themes: state.themes.map((theme) => {
          if (theme.theme === action.payload.theme) {
            theme.categories = theme.categories.map((category) => {
              if (category === action.payload.category) {
                category.question.isAnswered = true;
              }
              return category;
            });
          }
          return theme;
        }),
      };

    default:
      return state;
  }
}

export default themeReducer;
