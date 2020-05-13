import React from "react";
import { Link } from "react-router-dom";

const CardSummary = ({ card }) => {
  const handleClick = () => {
    // e.preventDefault();
    var element = document.getElementById(card.id);

    element.classList.toggle("is-flipped");

    // cards.forEach((card) => card.classList.toggle("is-flipped"));
  };

  return (
    <div className="col s12 m6 l4 ">
      <div className="card horizontal section" onClick={handleClick}>
        <div className="card-stacked " id={card.id}>
          <div className="card-content front">
            <div className="card-text front-text">
              <p>{card.term}</p>
            </div>
            <Link to={"/card/" + card.id}>
              <i className="material-icons edit-icon right">...edit</i>
            </Link>
          </div>

          <div className="card-content back">
            <div className="card-text back-text">
              <p>{card.definition}</p>
            </div>
            <Link to={"/card/" + card.id}>
              <i className="material-icons edit-icon right back">...edit</i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSummary;
