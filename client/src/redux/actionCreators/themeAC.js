import { CREATE_THEMES, SET_ANSWERED } from '../actionTypes/actionTypes';

export function createThemesAC(payload) {
  return {
    type: CREATE_THEMES,
    payload,
  };
}

export function setAnsweredAC(payload) {
  return {
    type: SET_ANSWERED,
    payload,
  };
}
