import { SET_USER_INFO } from './action-types';

const fetchGithubUser = (username) => fetch(`https://api.github.com/users/${username}`).then(response => response.json());

const setUserInfo = (user) => ({
  type: SET_USER_INFO,
  user
});

export const fetchUser = (username) => dispatch => (
  fetchGithubUser(username)
    .then(response => {
      if (response.message) {
        dispatch(setUserInfo({ error: response.message }));
        return;
      }
      dispatch(setUserInfo(response))
    })
);
