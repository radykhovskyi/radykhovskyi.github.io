import React from 'react';
import UserInfo from './UserInfo';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const MainPage = () => <div>Please paste username into url</div>;

const App = () => (
  <div className="container">
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:username" render={({ match }) => <UserInfo username={match.params.username} /> } />
      </Switch>
    </Router>
  </div>
);

export default App;
