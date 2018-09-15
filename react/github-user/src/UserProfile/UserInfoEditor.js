import React from 'react';

class UserInfoEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      company: props.company,
      location: props.location,
      bio: props.bio
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSave } = this.props;
    if (typeof onSave !== 'function') return;
    onSave(this.state);
  }

  render() {
    const { avatar_url, login, onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="edit-profile">
        <div className="row">
          <div className="col-4">
            <img src={avatar_url} className="avatar" alt="Avatar" />

            <div className="username">{login}</div>
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
                <button type="button" className="btn btn-secondary align-left" onClick={onCancel}>Cancel</button>
                <button type="submit" className="btn btn-success align-right">Save</button>
              </div>
             </div>
          </div>  
        </div>
      </form>
    )
  }
}

export default UserInfoEditor;
