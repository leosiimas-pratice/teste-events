import {SET_EVENTS} from '../actions/actionTypes';

const initialState = {
  events: [],
};

// Toda vez que faz dispatch dispara essa função
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
