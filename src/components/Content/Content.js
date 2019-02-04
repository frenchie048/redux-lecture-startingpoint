import React, { Component } from "react";
import Login from './Login';

export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="d-c">
          <div className="login-container">
            {
              this.props.user ? `${this.props.user} is cool` : <Login login={this.props.login} />
            }
          </div>
        </div>
      </div>
    );
  }
}
