import React from 'react';
import UserProfileProvider from './UserProfileProvider';
import UserInfo from './UserInfo';
import UserFollowers from './UserFollowers';

const UserFollowersPage = ({ user }) => {
  return (
    user && <UserInfo><UserFollowers /></UserInfo> : 'Loading...'
  )
};

const toProps = ({ user }) => ({ user });
export default UserProfileProvider.connect(toProps)(UserFollowersPage);
