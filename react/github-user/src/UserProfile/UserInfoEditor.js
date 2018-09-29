import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserProfileProvider from './UserProfileProvider';

class UserInfoEditor extends React.Component {

  constructor(props) {
    super(props);

    const { user } = this.props;
    this.state = {
      name: user.name,
      company: user.company,
      location: user.location,
      bio: user.bio,
      token: '',
      redirect: null
    }
  }
  changeName = ({ target }) => this.setState({
    name: target.value,
  });

  changeCompany = ({ target }) => this.setState({
    company: target.value,
  });

  changeLocation = ({ target }) => this.setState({
    location: target.value,
  });

  changeBio = ({ target }) => this.setState({
    bio: target.value,
  });

  changeToken = ({ target }) => this.setState({
    token: target.value,
  });

  handleSubmit = (e) => {
    e.preventDefault();
    const { saveUser } = this.props;
    if (typeof saveUser !== 'function') return;
    const { name, company, location, bio, token } = this.state;
    if (!token || token.length === 0) {
      alert('Please fill the token field');
      return;
    }

    saveUser({ name, company, location, bio}, token)
      .then(response => this.setState({ redirect: `/${response.login}/following` }))
      .catch(error => alert(`Github error: ${error}`));
  }

  render() {
    const { user } = this.props;
    const { avatar_url, login } = user;
    const { redirect }  = this.state;

    if (redirect !== null) {
      return <Redirect to={redirect} />;
    }

    return (
      <form onSubmit={this.handleSubmit} className="edit-profile">
        <div className="row">
          <div className="col-4">
            <img src={avatar_url} className="avatar" alt="Avatar" />

            <div className="username">{login}</div>

            <div className="form-group">
              <label>Token:</label>
              <input type="password" className="form-control" value={this.state.token} onChange={this.changeToken} />
            </div>
            
          </div>  
          <div className="col-6">
            <div className="info">
              <div className="form-group">
                <label>Name:</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.changeName} />
              </div>
              <div className="form-group">
                <label>Company:</label>
                <input type="text" className="form-control" value={this.state.company} onChange={this.changeCompany} />
              </div>
              <div className="form-group">
                <label>Location:</label>
                <input type="text" className="form-control" value={this.state.location} onChange={this.changeLocation} />
              </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea className="form-control" onChange={this.changeBio} defaultValue={this.state.bio}></textarea>
              </div>

              <div>
                <Link to={`/${login}`} className="btn btn-secondary align-left">Cancel</Link>
                <button type="submit" className="btn btn-success align-right">Save</button>
              </div>
             </div>
          </div>  
        </div>
      </form>
    )
  }
}

export default UserProfileProvider.connect()(UserInfoEditor);
