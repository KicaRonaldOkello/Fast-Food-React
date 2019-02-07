import actionTypes from "./actionTypes";

export const signup = signupData => dispatch => {
  return fetch(`${actionTypes.BASEURL}auth/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(signupData)
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: actionTypes.SIGNUP,
        payload: data
      });
    })
    .catch(error => error);
};
export default signup;
