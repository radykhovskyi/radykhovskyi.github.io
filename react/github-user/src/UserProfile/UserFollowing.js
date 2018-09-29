import React from 'react';
import { fetchUserFollowing } from './user';
import UserInfoTabs from './UserInfoTabs';
import { UserCard } from './UserCard';
import UserProfileProvider from './UserProfileProvider';

class UserFollowing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      following: null,
    };
  }

  componentDidMount() {
    this.loadFollowing();
  }

  loadFollowing() {
    const { user } = this.props;
    fetchUserFollowing(user.login)
      .then(response => this.setState({ following: response }));
  }

  render() {
    const { following } = this.state;

    return (
      <div>
        <UserInfoTabs />

        {following && following.map(user => <UserCard key={user.id} user={user} />)}
      </div>
    );
  };
}

const toProps = ({ user }) => ({ user });
export default UserProfileProvider.connect(toProps)(UserFollowing);
