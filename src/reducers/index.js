import { combineReducers } from "redux";
import signupReducer from "./SignUpReducer.jsx";
import loginReducer from "./LoginReducer.jsx";

const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer
});
export default rootReducer;
