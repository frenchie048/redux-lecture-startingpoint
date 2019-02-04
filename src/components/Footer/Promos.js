import React, { Component } from "react";
import Apply from './Apply';

export default class Promos extends Component {
  render() {
    return <div>
      <Apply user={this.props.user} />
    </div>;
  }
}
