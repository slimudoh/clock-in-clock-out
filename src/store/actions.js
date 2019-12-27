import * as types from "./constant";
import axios from "axios";

export const login = payload => {
  return dispatch => {
    const error = null;
    dispatch(loginError(error));

    new Promise((resolve, reject) => {
      axios
        .post(types.LOGIN__PATH, payload)
        .then(resp => {
          const data = resp.data.data;
          if (data) {
            sessionStorage.setItem("token", data.token);
            axios.defaults.headers.common["Authorization"] = `${data.token}`;
            dispatch(setToken(data.token));
          } else {
            const error = "Wrong Authentication. Please try again.";
            sessionStorage.removeItem("token");
          }

          resolve(resp);
        })
        .catch(err => {
          const error = "An error occured. Please try again later";
          sessionStorage.removeItem("token");
          reject(err);
        });
    });
  };
};

export const setToken = token => {
  return {
    type: types.SET_TOKEN,
    payload: token
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};

export const loginError = payload => {
  return {
    type: types.LOGIN_ERROR,
    payload: payload
  };
};
