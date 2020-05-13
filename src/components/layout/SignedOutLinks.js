import React from "react";
import flipLearn from "../../img/fliplearn4.png";

import { NavLink, Link } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <nav className="">
      <div className="signed-out nav-wrapper transparent">
        <Link to="/" className="brand-logo left">
          <img src={flipLearn} alt="logo-img" width="170" />
        </Link>
        <ul className="right ">
          <li className="signin-link">
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li className="signin-link">
            <NavLink to="/signin">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SignedOutLinks;
