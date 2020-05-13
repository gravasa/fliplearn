import React, { Component } from "react";
import { connect } from "react-redux";
import { createCard } from "../../store/actions/cardActions";
import { Redirect } from "react-router-dom";

class CreateCard extends Component {
  state = {
    term: "",
    definition: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createCard(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card-panel  createcard-container">
            <form
              onSubmit={this.handleSubmit}
              className="createcard-form"
              autoComplete="off"
            >
              <div className="title-container">
                <span className="createcard-title flow-text ">
                  Create new card
                </span>
              </div>

              <div className="input-field">
                <label htmlFor="term">Term</label>
                <input
                  type="text"
                  id="term"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="input-field ">
                <label htmlFor="definition">
                  Definition{" "}
                  <span className="max-len">(max 150 characters)</span>
                </label>
                <textarea
                  id="definition"
                  className="materialize-textarea"
                  maxLength="150"
                  required
                  onChange={this.handleChange}
                ></textarea>
              </div>
              <div className="createbtn-container">
                <button className="btn save btn-large  hoverable ">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCard: (card) => dispatch(createCard(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);
