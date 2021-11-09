export const pagesizeActionTypes = {
  // ADD: 'ADD',
  SIX: "6",
  TWELVE: "12",
  EIGHTEEN: "18",
  TWENTYFOUR: "24",
};

export const changePageSize = (e) => (dispatch) => {
  switch (e) {
    case "6":
      return dispatch({ type: pagesizeActionTypes.SIX });
    case "12":
      return dispatch({ type: pagesizeActionTypes.TWELVE });
    case "18":
      return dispatch({ type: pagesizeActionTypes.EIGHTEEN });
    case "24":
      return dispatch({ type: pagesizeActionTypes.TWENTYFOUR });
    default:
      return dispatch({ type: pagesizeActionTypes.SIX });
  }
};
