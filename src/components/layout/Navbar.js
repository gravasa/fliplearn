import React, { Component } from "react";
// import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import "../../index.css";
import WelcomePage from "../dashboard/WelcomePage";
import { Redirect } from "react-router-dom";

class Navbar extends Component {
  render() {
    const { auth, profile } = this.props;

    const links = auth.uid ? (
      <SignedInLinks profile={profile} auth={auth} />
    ) : (
      <Redirect to="/welcome" />
    );

    return <div>{links}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
