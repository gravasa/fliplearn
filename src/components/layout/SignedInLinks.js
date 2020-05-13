import React, { Component } from "react";
import flipLearn from "../../img/fliplearn4.png";
import SignedInSideNav from "./SignedInSideNav";
import M from "materialize-css";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

class SignedInLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    M.AutoInit();
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    var classnames = this.state.visible ? "navbar" : "navbar--hidden";
    return (
      <div className="nav-container">
        <nav className={classnames}>
          <div className="my-nav nav-wrapper transparent">
            <Link to="/" className="brand-logo left">
              <img src={flipLearn} alt="logo-img" width="170" />
            </Link>
            <a
              href="/"
              data-target="slide-out"
              className="sidenav-trigger right"
            >
              <i className="material-icons md-48 ">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <div className="nav-btn-container">
                <li>
                  <NavLink
                    to="/createcard"
                    className="btn-large nav-create-btn nav-btn z-depth-3 "
                  >
                    Create Card
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/randomcard"
                    className="btn-large nav-random-btn nav-btn z-depth-3 "
                  >
                    Random Card
                  </NavLink>
                </li>
              </div>
              <li className="profile-icon-container">
                <NavLink
                  to="#!"
                  className="dropdown-trigger profile-icon btn btn-floating  "
                  data-target="dropdown1"
                >
                  {this.props.profile.initials}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="dropdown1" className="dropdown-content scale-transition">
          <div className="scale-transition scale-in">
            <li className="profile-icon-container ">
              <NavLink
                to="#"
                className="profile-icon btn btn-floating z-depth-0  "
              >
                {this.props.profile.initials}
              </NavLink>
            </li>
            <li>
              <p>
                {this.props.profile.firstName} {this.props.profile.lastName}
              </p>
            </li>
            <li>
              <p>{this.props.auth.email}</p>
            </li>

            <li className="divider"></li>
            <li>
              <a href="/" onClick={this.props.signOut}>
                Log Out
              </a>
            </li>
          </div>
        </ul>
        <SignedInSideNav profile={this.props.profile} auth={this.props.auth} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
