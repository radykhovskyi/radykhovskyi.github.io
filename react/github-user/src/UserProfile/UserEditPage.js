import React from 'react';
import UserProfileProvider from './UserProfileProvider';
import UserInfoEditor from './UserInfoEditor';

const UserEditPage = ({ user }) => {
  return (
    user && <UserInfoEditor /> : 'Loading...'
  )
};

const toProps = ({ user }) => ({ user });
export default UserProfileProvider.connect(toProps)(UserEditPage);
