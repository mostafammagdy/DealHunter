import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="profile-container">
        <div className="container">
          <div className="profile-info">
            <div className="profile-name"></div>
            <h1>{this.props.currentUser.firstName}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
