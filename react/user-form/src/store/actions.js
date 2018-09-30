import { SET_NAME, SET_AGE, TOGGLE_IS_STUDENT } from './action-types';

export const setName = (name) => ({
  type: SET_NAME,
  name
});

export const setAge = (age) => ({
  type: SET_AGE,
  age
});

export const toggleIsStudent = () => ({
  type: TOGGLE_IS_STUDENT
});
