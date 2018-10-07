import { SET_USER_INFO } from './action-types';

const initialState = {
  user: {},
};

const appReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_USER_INFO:
      const { user } = action;
      return {
        ...state,
        user
      };
    default:
      return state;
  }
};

export default appReducer;
