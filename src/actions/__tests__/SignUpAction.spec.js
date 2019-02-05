import fetchMock from "fetch-mock";
import actionTypes from "../actionTypes";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { signup } from "../SignUpAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Test signup action", () => {
  it("test signup action", () => {
    fetchMock.postOnce(`${process.env.BASEURL}auth/signup`, {
      body: { username: "kica", email: "okello.ronald@andela.com" },
      headers: {
        "content-type": "application/json"
      }
    });

    const expectedActions = [
      {
        type: actionTypes.SIGNUP,
        payload: { username: "kica", email: "okello.ronald@andela.com" }
      }
    ];
    const store = mockStore({});

    return store
      .dispatch(signup({ username: "kica", email: "okello.ronald@andela.com" }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
