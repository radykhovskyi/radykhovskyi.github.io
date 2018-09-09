import React, { Component } from 'react';
import UserList from './UserList';
import './App.css';

const users = require('./users.json');

class App extends Component {
  render() {
    return (
      <div className="container">
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
