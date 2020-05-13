export const createCard = (card) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //   make async call to database
    const firestore = getFirestore();
    // const profile = getState().firebase.profile;
    // const authorId = getState.firebase.auth.uid;
    firestore
      .collection("cards")
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

// export const createCard = (card) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     //   make async call to database
//     const firestore = getFirestore();
//     const firebase = getFirebase();
//     // const profile = getState().firebase.profile;
//     // const authorId = getState.firebase.auth.uid;
//     firestore
//       .collection("users")
//       .doc(resp.user.uid)
//       .collection("cards")
//       .add({
//         ...card,
//       })
//       .then(() => {
//         dispatch({ type: "CREATE_CARD", card });
//       })
//       .catch((err) => {
//         dispatch({ type: "CREATE_CARD_ERROR", err });
//       });
//   };
// };
