import { pagesizeActionTypes } from "./action";

const pagesizeInitialState = {
  pagesize: "12",
};

export default function reducer(state = pagesizeInitialState, action) {
  switch (action.type) {
    case pagesizeActionTypes.SIX:
      return Object.assign({}, state, {
        pagesize: "6",
      });
    case pagesizeActionTypes.TWELVE:
      return Object.assign({}, state, {
        pagesize: "12",
      });
    case pagesizeActionTypes.EIGHTEEN:
      return Object.assign({}, state, {
        pagesize: "18",
      });
    case pagesizeActionTypes.TWENTYFOUR:
      return Object.assign({}, state, {
        pagesize: "24",
      });
    default:
      return state;
  }
}
