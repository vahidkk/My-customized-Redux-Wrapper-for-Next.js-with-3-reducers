export const cartIDActionTypes = {
  CHANGE: "CHANGE",
  DEFAULT: "DEFAULT",
};

export const changeCartID = (v) => (dispatch) => {
  console.log("here is the received value ", v);
  if (v ? v.CHANGE : undefined)
    return dispatch({ type: cartIDActionTypes.CHANGE, val: v.VALUE });
  else return dispatch({ type: cartIDActionTypes.DEFAULT, val: null });
};
