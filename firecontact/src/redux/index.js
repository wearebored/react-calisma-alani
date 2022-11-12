import { createStore } from "redux";
import addcontact from "./reducers/addcontact";

export const store = createStore(addcontact);
