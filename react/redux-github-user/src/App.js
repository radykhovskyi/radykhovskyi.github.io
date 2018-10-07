import React from 'react';
import UserInfo from './UserInfo';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = () => (
  <div className="container">
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/:username" render={({ match }) => <UserInfo username={match.params.username} /> } />
    </Router>
  </div>
);

export default App;
