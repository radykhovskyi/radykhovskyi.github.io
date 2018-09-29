import React from 'react';
import { NavLink } from 'react-router-dom';
import UserProfileProvider from './UserProfileProvider';

const UserInfoTabs = ({ user }) => {
  return (
    <div className="tabs">
      <span>
        <NavLink to={`/${user.login}/following`}>Following ({user.following})</NavLink>
      </span>
      <span>
        <NavLink to={`/${user.login}/followers`}>Followers ({user.followers})</NavLink>
      </span>
    </div>
  )
};

const toProps = ({ user }) => ({ user });
export default UserProfileProvider.connect(toProps)(UserInfoTabs);
