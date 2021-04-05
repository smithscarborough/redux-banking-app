import { createStore } from "redux";
import account from "./accountReducer";

const store = createStore(
  account,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;