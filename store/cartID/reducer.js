import { cartIDActionTypes } from "./action";
const cartIDInitialState = {
  myCartID: null,
};

export default function reducer(state = cartIDInitialState, action) {
  switch (action.type) {
    case cartIDActionTypes.CHANGE:
      return Object.assign({}, state, {
        myCartID: action.val,
      });
    default:
      return state;
  }
}
