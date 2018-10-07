import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './store/actions';

const UserCard = ({ name, login, avatar_url, company, location, public_repos, following, followers }) => (
  <div className="col-4">
    <div className="card user-info">
      <div className="card-body">
        <img className="card-img-top" src={avatar_url} alt="Avatar" />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{login}</p>

        <div>Company: {company || '-'}</div>
        <div>Location: {location || '-'}</div>

        <div className="stats">
          <span>Statistics: </span>

          <div>Repositories: {public_repos}</div>
          <div>Following: {following}</div>
          <div>Followers: {followers}</div>
        </div>
      </div>
    </div>
  </div>
);

class UserInfo extends React.Component {
  componentDidMount() {
    const { username, loadUser } = this.props;
    loadUser(username);
  }

  render() {
    const { user } = this.props;
    const { id, error } = user;
    if (error !== undefined) {
      return (
        <div className="alert alert-danger" role="alert">
          Fetch user error: {error}
        </div>
      );
    }
    if (id === undefined) {
      return (
        <div className="alert alert-primary" role="alert">
          Loading user info...
        </div>
      );
    }

    return <UserCard {...user} />;
  }
}

const toProps = ({ user }) => ({ user });
const handlers = {
  loadUser: (username) => fetchUser(username)
}

export default connect(toProps, handlers)(UserInfo);
