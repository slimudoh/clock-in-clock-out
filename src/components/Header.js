import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionCreators from "../store/actions";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

function Header() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(actionCreators.logout());
  };

  return (
    <div className="header">
      <div className="header_logo">LOGO</div>
      <div className="header_profile">
        <div className="header_notify">
          <img src={require("../assets/images/notification.svg")} alt="" />
        </div>

        <div className="header_avatar">
          <div className="header_avatar__div">
            <img src={require("../assets/images/boy.png")} alt="user" />
          </div>

          <div className="header_dropdown">
            <div>
              <div>
                <NavLink to="/dashboard">
                  <div>
                    <div className="header_dropdown_img">
                      <img
                        src={require("../assets/images/settings.svg")}
                        alt=""
                      />
                    </div>
                    <div className="header_dropdown_link">Settings</div>
                  </div>
                </NavLink>
              </div>

              <div>
                <div onClick={logout}>
                  <div className="header_dropdown_img">
                    <img src={require("../assets/images/logout.svg")} alt="" />
                  </div>
                  <div className="header_dropdown_link">Log out</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
