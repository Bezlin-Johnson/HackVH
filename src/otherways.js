import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class Otherw extends Component {
  state = { inSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: user });
    });
  };
  render() {
    return (
      <div className="wrapperlogin">
        {this.state.isSignedIn === "true" ? (
          <div>Signed In</div>
        ) : (
          <StyledFirebaseAuth
            className="firesign"
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default Otherw;
