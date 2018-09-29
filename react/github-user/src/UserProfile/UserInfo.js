import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileProvider from './UserProfileProvider';

const UserStats = ({ repositories, following, followers }) => {
  return (
    <div className="stats">
      <span>Statistics: </span>

      <div>Repositories: {repositories}</div>
      <div>Following: {following}</div>
      <div>Followers: {followers}</div>
    </div>
  )
};

const UserInfo = ({ user, children }) => {
  return (
    <div className="row">
      <div className="col-4">
        <div className="card user-info">
          <div className="card-body">
            <img className="card-img-top" src={user.avatar_url} alt="Avatar" />
            <Link to={`/${user.login}/edit`}>{user.name}</Link>
            <p className="card-text">{user.login}</p>

            <div>Bio: {user.bio || '-'}</div>
            <div>Company: {user.company || '-'}</div>
            <div>Location: {user.location || '-'}</div>

            <UserStats
              repositories={user.public_repos}
              following={user.following}
              followers={user.followers}
            />
          </div>
        </div>
      </div>

      <div className="col-8">
        {children}
      </div>
    </div>
  )
};

const toProps = ({ user }) => ({ user });
export default UserProfileProvider.connect(toProps)(UserInfo);
