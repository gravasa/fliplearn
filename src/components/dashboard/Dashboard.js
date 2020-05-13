import React, { Component } from "react";
import CardList from "../cards/CardList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { cards, auth } = this.props;
    if (!auth.uid) return auth.isLoaded && <Redirect to="/welcome" />;

    return (
      <div className="dashboard container section">
        <CardList cards={cards} auth={auth} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.firestore.ordered.cards,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "cards" }])
)(Dashboard);
