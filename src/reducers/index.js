import { combineReducers } from "redux";
import signupReducer from "./SignUpReducer.jsx";

const rootReducer = combineReducers({
  signup: signupReducer
});
export default rootReducer;
