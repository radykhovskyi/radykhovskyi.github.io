import React, { Component } from 'react';
import { createConnect } from '../connect-hoc';
import { fetchUserByName, patchUser } from './user';

const { Provider, Consumer } = React.createContext(null);

class UserProfileProvider extends Component {
  static Consumer = Consumer;
  static connect = createConnect(Consumer)

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.loadUser();
  }

  getContext() {
    return {
      user: this.state.user,
      saveUser: this.handleUserSave,
    };
  }

  handleResponse = response => {
    if (response.message) {
      return Promise.reject(response.message);
    }

    this.setState({ user: response });

    return response;
  }

  handleUserSave = (data, token) => {
    return patchUser(token, data).then(this.handleResponse);
  }

  loadUser() {
    const { username } = this.props;
    fetchUserByName(username)
      .then(this.handleResponse);
  }

  render() {
    const { children } = this.props;
    return (
      <Provider value={this.getContext()}>
        {children}
      </Provider>
    )
  }
}

export default UserProfileProvider;
