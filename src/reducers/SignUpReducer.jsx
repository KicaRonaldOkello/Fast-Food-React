import actionTypes from "../actions/actionTypes";

const initialState = {
  signup: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP:
      return {
        ...state,
        signup: action.payload
      };
    default:
      return state;
  }
}
