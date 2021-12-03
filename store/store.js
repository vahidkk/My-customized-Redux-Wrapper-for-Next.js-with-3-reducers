import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import myCartID from "./cartID/reducer";
import count from "./count/reducer";
import tick from "./tick/reducer";
import pagesize from "./pagesize/reducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  myCartID,
  count,
  tick,
  pagesize,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.myCartID.myCartID)
      nextState.myCartID.myCartID = state.myCartID.myCartID; // preserve myCartID value on client side navigation
    if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    if (state.pagesize.pagesize)
      nextState.pagesize.pagesize = state.pagesize.pagesize; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
