import React from 'react';
import { Link } from 'react-router-dom';

export const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="user avatar" />

      <div className="info">
        <Link to={`/${user.login}`}>{user.login}</Link>
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
