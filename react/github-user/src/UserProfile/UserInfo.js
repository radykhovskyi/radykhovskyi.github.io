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

const UserInfo = ({name, login, avatar_url, bio, company, location, public_repos, following, followers, toggleView}) => {
  const handleClick = (e) => {
    e.preventDefault();
    toggleView();
  };
  return (
    <div className="card user-info">
      <div className="card-body">
        <img className="card-img-top" src={avatar_url} alt="Avatar" />
        <a className="card-title" onClick={handleClick} href="">{name}</a>
        <p className="card-text">{login}</p>

        <div>Bio: {bio || '-'}</div>
        <div>Company: {company || '-'}</div>
        <div>Location: {location || '-'}</div>

        <UserStats
          repositories={public_repos}
          following={following}
          followers={followers}
        />
      </div>
    </div>
  )
};

export default UserInfo;
