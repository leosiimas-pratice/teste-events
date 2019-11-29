import {ADD_PRESENT} from '../actions/actionTypes';

const initialState = {
  presents: [
    {
      id: Math.random(),
      eventId: 1,
      name: 'Chuveiro',
      available: true,
      user: 'Leo',
      suggestion: 'Chuveiro',
    },
    {
      id: Math.random(),
      eventId: 1,
      name: 'Carro',
      available: true,
      user: 'Leo',
      suggestion: 'Chuveiro',
    },
    {
      id: Math.random(),
      eventId: 1,
      name: 'Panela de Pressão',
      available: false,
      user: 'Pamela da Silva',
      suggestion: 'Chuveiro',
    },
    {
      id: Math.random(),
      eventId: 1,
      name: 'Talheres',
      available: true,
      user: 'Leo',
      suggestion: 'Chuveiro',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRESENT:
      return {
        ...state,
        presents: state.presents.concat({
          ...action.payload,
        }),
      };
    default:
      return state;
  }
};

export default reducer;
