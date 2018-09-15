export const fetchUser = token => {
  const headers = new Headers();
  headers.set('Authorization', `token ${token}`);
  return fetch(
      'https://api.github.com/user',
      { headers: headers }
    )
    .then(response => response.json());
};

export const patchUser = (token, data) => {
  const headers = new Headers();
  headers.set('Authorization', `token ${token}`);
  return fetch(
      'https://api.github.com/user',
      { method: 'PATCH', headers: headers, body: JSON.stringify(data) }
    )
    .then(response => response.json());
};
