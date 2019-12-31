import * as types from "../constant";

const initialState = {
  users: null
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
