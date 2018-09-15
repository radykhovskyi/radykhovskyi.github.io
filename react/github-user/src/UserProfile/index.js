import React from 'react';
import UserInfo from './UserInfo';
import UserInfoEditor from './UserInfoEditor';
import { fetchUser, patchUser } from './user';

const USER_MODE_VIEW = 'view';
const USER_MODE_EDIT = 'edit';
const USER_MODE_LOAD = 'load';

const isView = mode => (
  mode === USER_MODE_VIEW
);

const isEdit = mode => (
  mode === USER_MODE_EDIT
);

const isLoad = mode => (
  mode === USER_MODE_LOAD
);

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: USER_MODE_LOAD,
      user: null
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  toggleView = () => this.setState(
    ({ mode }) => ({
      mode: mode === USER_MODE_VIEW
        ? USER_MODE_EDIT
        : USER_MODE_VIEW
    })
  );

  handleResponse = response => this.setState({ user: response })

  handleUserSave = data => {
    const { token } = this.props;
    patchUser(token, data)
      .then(this.handleResponse)
      .then(this.toggleView);
  }


  loadUser() {
    const { token } = this.props;
    fetchUser(token)
      .then(this.handleResponse)
      .then(() => this.setState({ mode: USER_MODE_VIEW }));
  }

  render() {
    const { mode, user } = this.state;

    return (
      isView(mode) ? <UserInfo {...user} toggleView={this.toggleView} /> :
      isEdit(mode) ? <UserInfoEditor {...user} onCancel={this.toggleView} onSave={this.handleUserSave} /> :
      isLoad(mode) ? <div>Loading...</div> :
      null
    );
  }
}

export default UserProfile;
