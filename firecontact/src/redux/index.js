import { createStore, combineReducers } from "redux";
import addcontact from "./reducers/addcontact";
import loginsignin from "./reducers/loginsignin";
const rootReducer = combineReducers({
  addcontact,
  loginsignin,
});

export const store = createStore(rootReducer);
