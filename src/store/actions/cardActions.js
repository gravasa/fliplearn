export const createCard = (card) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //   make async call to database
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection(`cards/${authorId}/userCards`)
      .add({
        ...card,
      })
      .then(() => {
        dispatch({ type: "CREATE_CARD", card });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_CARD_ERROR", err });
      });
  };
};
