import {ADD_MESSAGE} from './actionTypes';

export const setMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
};
