import React from "react";
import { NavLink, Link } from "react-router-dom";
import flipLearn from "../../img/fliplearn4.png";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInSideNav = (props) => {
  return (
    <ul id="slide-out" className="sidenav right">
      <div className="background side-bar">
        <li>
          <div className="user-view">
            <NavLink
              to="#"
              className="btn profile-icon btn-floating z-depth-0 "
            >
              {props.profile.initials}
            </NavLink>
            <NavLink to="#name">
              <span className="name">
                {props.profile.firstName} {props.profile.lastName}
              </span>
            </NavLink>
            <NavLink to="email">
              <span className="email">{props.auth.email}</span>
            </NavLink>

            <a href="/" onClick={props.signOut}>
              Log Out
            </a>
          </div>
        </li>
        <div className="side-bar-buttons">
          <li>
            <NavLink
              to="/createcard"
              className="btn-large nav-create-btn z-depth-3 nav-btn"
            >
              Create Card
            </NavLink>
          </li>
          <li></li>
          <li>
            <NavLink
              to="/randomcard"
              className="btn-large nav-random-btn z-depth-3 nav-btn"
            >
              Random Card
            </NavLink>
          </li>
          <div className="sidenav-brand-logo">
            <Link to="/" className="brand-logo">
              <img src={flipLearn} alt="logo-img" width="115" />
            </Link>
          </div>
        </div>
      </div>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInSideNav);
