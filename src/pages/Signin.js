import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

function Signin() {
  let history = useHistory();

  const [signupData, setSignupData] = useState({
    username: "longbridge",
    password: "12345"
  });

  const signin = e => {
    e.preventDefault();

    let signupdata = signupData;

    if (signupdata.username.trim() === "") {
      console.log("Please enter your username.");
      return;
    }

    if (signupdata.password.trim() === "") {
      console.log("Please enter your password.");
      return;
    }

    if (signupdata.password.trim().length < 5) {
      console.log("Password must not be less than 5 characters.");
      return;
    }

    if (/\s/.test(signupdata.password.trim())) {
      console.log("Password must not contain space.");
      return;
    }

    const registerData = {
      username: signupdata.username,
      password: signupdata.password
    };

    console.log(registerData);
    // history.push("/dashboard");
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
