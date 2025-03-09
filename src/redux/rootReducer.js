import { combineReducers } from "redux";
import colorReducer from "./colorReducer";
import timerReducer from "./timerReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  colors: colorReducer,
  time: timerReducer,
  auth: authReducer,
});

export default rootReducer;
