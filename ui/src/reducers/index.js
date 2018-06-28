import { combineReducers } from "redux";
import { patients } from "./patients";
import { wounds } from "./wounds";

const rootReducer = combineReducers({
  patients,
  wounds
});

export default rootReducer;
