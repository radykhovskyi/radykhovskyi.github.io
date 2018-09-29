const getEndpoint = url => `https://api.github.com${url}`;

export const fetchUser = token => {
  const headers = new Headers();
  headers.set('Authorization', `token ${token}`);
  return fetch(
      getEndpoint('/user'),
      { headers: headers }
    )
    .then(response => response.json());
};

export const fetchUserByName = username => {
  const endpoint = getEndpoint(`/users/${username}`);
  return fetch(endpoint).then(response => response.json());
};

export const fetchUserFollowing = username => {
  const endpoint = getEndpoint(`/users/${username}/following`);
  return fetch(endpoint).then(response => response.json());
}

export const fetchUserFollowers = username => {
  const endpoint = getEndpoint(`/users/${username}/followers`);
  return fetch(endpoint).then(response => response.json());
}

export const patchUser = (token, data) => {
  const headers = new Headers();
  headers.set('Authorization', `token ${token}`);
  return fetch(
      getEndpoint('/user'),
      { method: 'PATCH', headers: headers, body: JSON.stringify(data) }
    )
    .then(response => response.json());
};
