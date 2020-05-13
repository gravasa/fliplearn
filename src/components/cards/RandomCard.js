import React, { Component } from "react";
import DrawButton from "./DrawButton";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";

class RandomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: {},
    };
  }

  componentDidMount() {
    // if (!this.props.cards) {}
    const currentCards = this.props.cards;

    const currentCard = this.getRandomCard(currentCards);

    this.setState({
      currentCard: currentCard,
    });
  }

  getRandomCard = (currentCards) => {
    const randomCard =
      this.props.cards &&
      currentCards[Math.floor(Math.random() * currentCards.length)];
    return randomCard;
  };

  updateCard = () => {
    const currentCards = this.props.cards;
    const currentCard = this.getRandomCard(currentCards);

    this.setState({
      currentCard: currentCard,
    });
  };

  handleClick = () => {
    let element = document.getElementById(this.state.currentCard.id);

    element.classList.toggle("is-flipped");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (!this.props.cards) return <Redirect to="/" />;

    return (
      <div className="row">
        <div className="col s12 m6 offset-m3 l4 offset-l4">
          <div
            className="card horizontal section random-card"
            onClick={this.handleClick}
          >
            <div className="card-stacked" id={this.state.currentCard.id}>
              <div className="card-content front">
                <div className="card-text front-text">
                  <p>{this.state.currentCard.term}</p>
                </div>
                <Link to={"/card/" + this.state.currentCard.id}>
                  <i className="material-icons edit-icon right">...edit</i>
                </Link>
              </div>
              <div className="card-content back">
                <div className="card-text back-text">
                  <p>{this.state.currentCard.definition}</p>
                </div>
                <Link to={"/card/" + this.state.currentCard.id}>
                  <i className="material-icons edit-icon right back">...edit</i>
                </Link>
              </div>
            </div>
          </div>
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    cards: state.firestore.ordered.cards,
  };
};

export default compose(
  firestoreConnect([{ collection: "cards" }]),
  connect(mapStateToProps)
)(RandomCard);
