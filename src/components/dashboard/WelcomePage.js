import React from "react";
import flipLearn from "../../img/fliplearn4.png";
import { NavLink, Link } from "react-router-dom";
import desktop from "../../img/desktop.png";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const WelcomePage = ({ auth }) => {
  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="welcome-container">
      <div className="row">
        <div className="col s12 l5 ">
          <div className="text-container welcome-text">
            <span className=" ">
              Improve your vocabulary in any field.
              <br />
              Create custom cards with terms and definitions.
              <br />
              And simply
              <br />
              <span className="flip">Flip</span>
              <span className="and-sign"> &</span>
              <span className="learn"> Learn</span>
            </span>
          </div>
        </div>
        <div className="col s12 l7">
          <div className="welcome-img-container">
            <img
              className="welcome-img"
              src={desktop}
              alt="screenshot-img"
              width="900"
            />
          </div>

          <div className="welcome-btn-container">
            <NavLink to="/signup" className="btn welcome-btn z-depth-5">
              Signup
            </NavLink>

            <NavLink to="/signin" className="btn  welcome-btn z-depth-5">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(WelcomePage);
