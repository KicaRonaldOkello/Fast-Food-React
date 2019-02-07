import SignUpReducer from "../SignUpReducer.jsx";
import actionTypes from "../../actions/actionTypes";

const initialState = {
  signup: {}
};

describe("Testing reducer", () => {
  it("Test empty reducer", () => {
    expect(SignUpReducer(undefined, {})).toEqual(initialState);
  });
  it("Test reduccer", () => {
    let response = SignUpReducer(initialState, {
      type: actionTypes.SIGNUP,
      payload: {
        user: {
          email: "okello.ronald@andela.com",
          username: "kica",
          token: "sSDEsdvs"
        }
      }
    });
    expect(response).toEqual({
      signup: {
        user: {
          email: "okello.ronald@andela.com",
          token: "sSDEsdvs",
          username: "kica"
        }
      }
    });
  });
});
