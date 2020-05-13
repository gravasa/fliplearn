const initState = {
  cards: [
    { id: "1", term: "Apple", definition: "It is sweet and awesome fruit" },
    {
      id: "2",
      term: "Table controller Hola rock n rolla",
      definition: "You sit and eat at it",
    },
  ],
};

const cardReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CARD":
      console.log("created card", action.card);
      return state;
    case "CREATE_CARD_ERROR":
      console.log("create card error", action.err);
      return state;
    default:
      return state;
  }
};

export default cardReducer;
