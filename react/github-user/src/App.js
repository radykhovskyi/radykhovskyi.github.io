import React from 'react';
import UserProfile from './UserProfile';
import { config } from './config';
import { decode } from './base64';
import './App.css';

const App = () => {
  const token = decode(config.github.token);
  return (
    <div className="container">
      <UserProfile token={token} />
    </div>
  );
}

export default App;
