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
          const data = resp.data;
          if (data.jwt) {
            sessionStorage.setItem("token", data.jwt);
            axios.defaults.headers.common["Authorization"] = `${data.token}`;
            dispatch(setToken(data.token));
            dispatch(getUsers());
          } else {
            const error = "Wrong Authentication. Please try again.";
            dispatch(loginError(error));
            sessionStorage.removeItem("token");
          }
          resolve(resp);
        })
        .catch(err => {
          const error = "Server error. Please try again later";
          dispatch(loginError(error));
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

export const getUsers = () => {
  return dispatch => {
    new Promise((resolve, reject) => {
      axios
        .get(types.USERS__PATH)
        .then(resp => {
          // const data = resp.data;
          console.log(resp);
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
};
