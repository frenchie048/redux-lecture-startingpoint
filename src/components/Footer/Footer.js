import React, { Component } from "react";
import Promos from './Promos';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="d-c">
          <ul>
            <a href="#">FAQs</a>
            <a href="#">Contact</a>
            <a href="#">Complain</a>
          </ul>
          <Promos user={this.props.user} />
        </div>
      </footer>
    );
  }
}
