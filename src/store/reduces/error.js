import * as types from "../constant";

const initialState = {
  loginError: null
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      };
    default:
      return state;
  }
};

export default errorsReducer;
