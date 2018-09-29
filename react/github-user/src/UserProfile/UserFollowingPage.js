import React from 'react';
import UserProfileProvider from './UserProfileProvider';
import UserInfo from './UserInfo';
import UserFollowing from './UserFollowing';

const UserFollowingPage = ({ user }) => {
  return (
    user && <UserInfo><UserFollowing /></UserInfo> : 'Loading...'
  )
};

const toProps = ({ user }) => ({ user });
export default UserProfileProvider.connect(toProps)(UserFollowingPage);
