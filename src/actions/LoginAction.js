import actionTypes from "./actionTypes";

export const login = loginData => dispatch => {
  return fetch(`${actionTypes.BASEURL}auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(loginData)
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: actionTypes.LOGIN,
        payload: data
      });
    })
    .catch(error => error);
};
export default login;
