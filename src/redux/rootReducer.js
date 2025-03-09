import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import timerReducer from "./timerReducer";

const rootReducer = combineReducers({
  colors: colorReducer,
  time: timerReducer,
});

export default rootReducer;
