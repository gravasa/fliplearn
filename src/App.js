import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import EditCard from "./components/cards/EditCard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateCard from "./components/cards/CreateCard";
import RandomCard from "./components/cards/RandomCard";
import SignedInSideNav from "./components/layout/SignedInSideNav";
import WelcomePage from "./components/dashboard/WelcomePage";
import { connect } from "react-redux";

function App(props) {
  // const { auth } = props;
  // if (!auth.uid) return <WelcomePage />;
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/card/:id" component={EditCard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createcard" component={CreateCard} />
          <Route path="/randomcard" component={RandomCard} />
          <Route path="/sidebar" component={SignedInSideNav} />
          <Route path="/welcome" component={WelcomePage} />
        </Switch>
        <footer>
          <p className="center">© 2020 Alex Gavras</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(App);
