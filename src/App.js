import React, { Component } from "react";
import "./App.css";
import fire from "./fire.js";
import Otherw from "./otherways.js";
class Landing extends Component {
  state = {
    user: null,
    tree: false,
  };
  componentDidMount = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: "yes" });
      } else {
        this.setState({ user: "no" });
      }
    });
  };
  other = () => {
    if (this.state.tree == false) {
      this.setState({ tree: true });
    }
  };

  render() {
    return (
      <div className="landingpagecss">
        <h1 className="signinheading">Sign In</h1>
        <button className="langingpagebuttons">Sign Up</button>
        <br />
        <br />
        <button onClick={this.other} className="langingpagebuttons">
          Login
        </button>
        {this.state.tree == true ? <Otherw /> : console.log()}
      </div>
    );
  }
}

export default Landing;
