import rootReducer from "./reducres";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store