import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../store/actions";

import WhiteLoader from "../components/WhiteLoader";

function Signin() {
  let history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auths.isLoggedIn);
  const isError = useSelector(state => state.err.loginError);

  const [loginError, setLoginError] = useState(false);
  const [loginMsg, setLoginMsg] = useState(null);
  const [btnLoader, setBtnLoader] = useState(false);

  useEffect(() => {
    const checkIsAuthenticated = () => {
      if (isAuth) {
        history.push("/dashboard");
        return;
      }

      if (isError) {
        setLoginError(true);
        setLoginMsg(isError);
        setBtnLoader(false);
      }

      dispatch(actionCreators.logout());
    };

    checkIsAuthenticated();
  });

  const [signupData, setSignupData] = useState({
    username: "longbridge",
    password: "12345"
  });

  const signin = e => {
    e.preventDefault();

    setLoginMsg(null);
    setLoginError(false);

    let signupdata = signupData;

    if (signupdata.username.trim() === "") {
      setLoginMsg("Please enter your username.");
      setLoginError(true);
      return;
    }

    if (signupdata.password.trim() === "") {
      setLoginMsg("Please enter your password.");
      setLoginError(true);
      return;
    }

    if (signupdata.password.trim().length < 5) {
      setLoginMsg("Password must not be less than 5 characters.");
      setLoginError(true);
      return;
    }

    if (/\s/.test(signupdata.password.trim())) {
      setLoginMsg("Password must not contain space.");
      setLoginError(true);
      return;
    }

    const registerData = {
      username: signupdata.username,
      password: signupdata.password
    };

    setBtnLoader(true);

    dispatch(actionCreators.login(registerData));
  };

  const handleSignupData = e =>
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });

  return (
    <div className="auth">
      <div className="auth_container">
        <div className="auth_container_logo">
          <div>
            {/* <img src={require("../assets/images/logo-white.svg")} alt="logo" /> */}
            LOGO
          </div>
        </div>
        <div className="auth_container_box">
          <div>
            <div className="auth_container_header">
              <span>Welcome</span>
              <p>kindly fill in the appropriate details</p>
            </div>
            <div className="auth_container_form">
              <form>
                <div className="auth_container_form__input">
                  <label>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={signupData.username}
                    onChange={handleSignupData}
                  />
                </div>
                <div className="auth_container_form__input">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={signupData.password}
                    onChange={handleSignupData}
                  />
                </div>
                <div className="auth_container_form__button">
                  {btnLoader ? (
                    <button disabled>
                      <WhiteLoader />
                    </button>
                  ) : (
                    <button onClick={signin}>Sign in</button>
                  )}
                </div>
                {loginError ? (
                  <div className="auth_container_form__error">{loginMsg}</div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
