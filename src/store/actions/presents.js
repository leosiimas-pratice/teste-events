import {ADD_PRESENT} from './actionTypes';

export const addEvent = present => {
  return {
    type: ADD_PRESENT,
    payload: present,
  };
};
