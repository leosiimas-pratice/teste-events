import {ADD_MESSAGE} from '../actions/actionTypes';

const initialState = {
  messages: [
    {
      id: Math.random(),
      name: 'Leo',
      message: 'Oie',
    },
    {
      id: Math.random(),
      name: 'Leo',
      message: 'Oie',
    },
    {
      id: Math.random(),
      name: 'Leo',
      message: 'Oie',
    },
    {
      id: Math.random(),
      name: 'Leo',
      message: 'Oie',
    },
  ],
};

// Toda vez que faz dispatch dispara essa função
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat({
          ...action.payload,
        }),
      };
    default:
      return state;
  }
};

export default reducer;
