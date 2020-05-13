import React from "react";
import CardSummary from "./CardSummary";
// import cardReducer from "../../store/reducers/cardReducer";

const CardList = ({ cards, auth }) => {
  return (
    <div className="card-list section">
      <div className="row ">
        {cards &&
          cards.map((card) => {
            return <CardSummary card={card} key={card.id} />;
          })}
      </div>
    </div>
  );
};

export default CardList;
