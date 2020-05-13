import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const EditCard = (props) => {
  const { card, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  console.log(props);

  if (card) {
    return (
      <div className="row">
        <div className="col s12 m10 offset-m1 l6 offset-l3">
          <div className="card-panel  editcard-container">
            <form className="editcard-form" autoComplete="off">
              <div className="title-container">
                <span className="editcard-title flow-text center">
                  Edit card
                </span>
              </div>
              <div className="edit-field">
                <label htmlFor="term">Term</label>
                <textarea id="term" className="materialize-textarea">
                  {card.term}
                </textarea>
              </div>
              <div className="edit-field ">
                <label htmlFor="definition">
                  Definition{" "}
                  <span className="max-len">(max 150 characters)</span>
                </label>
                <textarea
                  id="definition"
                  className="materialize-textarea"
                  maxLength="150"
                >
                  {card.definition}
                </textarea>
              </div>
              <div className="editbtn-container">
                <button className="btn btn-large save waves-effect hoverable waves-light ">
                  Save
                </button>
                <button className="btn btn-large cancel waves-effect hoverable waves-light">
                  Cancel
                </button>
                <button className="btn btn-small delete right waves-effect hoverable waves-light">
                  Delete card
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container transparent">
        <h5 className="center loading">Loading card...</h5>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const cards = state.firestore.data.cards;
  const card = cards ? cards[id] : console.log("no cards");
  return {
    card: card,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "cards" }])
)(EditCard);
