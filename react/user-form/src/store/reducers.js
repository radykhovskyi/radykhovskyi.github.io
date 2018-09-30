import { SET_NAME, SET_AGE, TOGGLE_IS_STUDENT } from './action-types';

const initialState = {
  name: '',
  age: 1,
  isStudent: false,
};

export const appReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.age,
      };
    case TOGGLE_IS_STUDENT:
      return {
        ...state,
        isStudent: !state.isStudent,
      };
    default:
      return state;
  }
};
