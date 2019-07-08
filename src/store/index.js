import { createStore } from "redux";
import AllReducers from "./reducers/AllReducers";

const initialStates = {
  auth: {
    loggedIn: false,
    user: {}
  }
};
const store = createStore(AllReducers, initialStates);
export default store;
