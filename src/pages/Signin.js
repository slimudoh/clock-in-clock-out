import React from "react";
import { useHistory } from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

function Signin() {
  let history = useHistory();

  const signin = e => {
    e.preventDefault();
    history.push("/dashboard");
  };

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
                  <input type="text" />
                </div>
                <div className="auth_container_form__input">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <div className="auth_container_form__button">
                  <button onClick={signin}>Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
