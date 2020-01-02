export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const GET_USERS = "GET_USERS";
export const USER_ERROR = "USER_ERROR";

export const LOGIN__PATH = `${process.env.REACT_APP_PATH}authenticate`;
export const USERS__PATH = `${process.env.REACT_APP_PATH}allusers`;
export const DEMO__PATH = `${process.env.REACT_APP_PATH}getclockedinuserstoday`;
