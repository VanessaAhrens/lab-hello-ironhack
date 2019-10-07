import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super();
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.displayName = props.displayName;
    this.avatarUrl = props.avatarUrl;
  }
  render() {
    return (
      <div>
        <h2>Hello, {this.displayName}!</h2>
        <p>Here is your avatar:</p>
        <img src={this.avatarUrl} />
      </div>
    );
  }
}

export default User;