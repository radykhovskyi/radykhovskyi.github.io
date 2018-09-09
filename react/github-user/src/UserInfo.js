import React from 'react';

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

const UserInfo = ({name, username, avatar, company, location, repositories, following, followers}) => {
  return (
    <div className="card user-info">
      <div className="card-body">
        <img className="card-img-top" src={avatar} alt="Avatar" />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">username</p>

        <div>Company: {company || '-'}</div>
        <div>Location: {location || '-'}</div>

        <UserStats
          repositories={repositories}
          following={following}
          followers={followers}
        />
      </div>
    </div>
  )
};

export default UserInfo;
