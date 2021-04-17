import React, { Component } from "react";
import "./App.css";
class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="landingpagecss">
        <h1>Sign In</h1>
        <button className="langingpagebuttons">Sign Up</button>
        <br />
        <button>Login</button>
      </div>
    );
  }
}

export default Landing;
