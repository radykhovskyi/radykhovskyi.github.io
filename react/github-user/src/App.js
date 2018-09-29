import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserFollowingPage from './UserProfile/UserFollowingPage';
import UserFollowersPage from './UserProfile/UserFollowersPage';
import UserEditPage from './UserProfile/UserEditPage';
import UserProfileProvider  from './UserProfile/UserProfileProvider';
import { config } from './config';
import './App.css';

const App = () => {
  const username = config.github.username;
  return (
    <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props) => <Redirect to={`/${username}/following`} />} />
            <Route exact path='/:username/following' render={({ match }) => <UserProfileProvider username={match.params.username}><UserFollowingPage /></UserProfileProvider>} />
            <Route exact path='/:username/followers' render={({ match }) => <UserProfileProvider username={match.params.username}><UserFollowersPage /></UserProfileProvider>} />
            <Route exact path='/:username/edit' render={({ match }) => <UserProfileProvider username={match.params.username}><UserEditPage /></UserProfileProvider>} />
            <Route exact path='/:username' render={({ match }) => <Redirect to={`/${match.params.username}/following`} />} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
