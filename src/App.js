import React, { Component } from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.login = this.login.bind(this);
  }

  login(user) {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Content user={this.state.user} login={this.login} />
        <Footer user={this.state.user} />
      </div>
    );
  }
}

export default App;
