import React, { Component } from 'react';
import UserInfo from './UserInfo';
import './App.css';

const user = require('./user.json');

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserInfo
          name={user.name}
          username={user.login}
          avatar={user.avatar_url}
          company={user.company}
          location={user.location}
          repositories={user.public_repos}
          following={user.following}
          followers={user.followers}
        />
      </div>
    );
  }
}

export default App;
