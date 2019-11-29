import axios from 'axios';

import {SET_EVENTS} from './actionTypes';

export const addEvent = event => {
  return dispatch => {
    axios
      .post('/events.json', {...event})
      .catch(err => console.log(err))
      .then(res => console.log(res.data));
  };
};

export const setEvents = events => {
  return {
    type: SET_EVENTS,
    payload: events,
  };
};

// TODO criar endpoints (CRUD)
export const fetchEvents = user => {
  return dispatch => {};
};
