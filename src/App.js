import React, { Component } from "react";
import "./App.css";
class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="landingpagecss">
        <h1 className="signinheading">Sign In</h1>
        <button className="langingpagebuttons">Sign Up</button>
        <br />
        <br />
        <button className="langingpagebuttons">Login</button>
      </div>
    );
  }
}

export default Landing;
