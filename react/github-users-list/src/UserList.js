import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <div className="row user-info">
      <img src={user.avatar_url} alt="user avatar" />

      <div className="info">
        <span className="username">{user.login}</span>
        {user.site_admin && 
          <span className="badge badge-secondary">Admin</span>
        }
        <div className="link">
          <a href={user.html_url} target="_blank">{user.html_url}</a>
        </div>
      </div>
    </div>
  )
};

const UserList = ({users}) => {
  return (
    <div className="users-list">
      {users.map(user => <UserInfo user={user} key={user.id} />)}
    </div>
  )
};

export default UserList;
