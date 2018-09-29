import React from 'react';
import { fetchUserFollowers } from './user';
import { UserCard } from './UserCard';
import UserInfoTabs from './UserInfoTabs';
import UserProfileProvider from './UserProfileProvider';

class UserInfoFollowers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      followers: null,
    };
  }

  componentDidMount() {
    this.loadFollowers();
  }

  loadFollowers() {
    const { user } = this.props;
    fetchUserFollowers(user.login)
      .then(response => this.setState({ followers: response }));
  }

  render() {
    const { followers } = this.state;

    return <div>
      <UserInfoTabs />

      {followers && followers.map(user => <UserCard key={user.id} user={user} />)}
    </div>;
  };
}

const toProps = ({ user }) => ({ user });
export default UserProfileProvider.connect(toProps)(UserInfoFollowers);
