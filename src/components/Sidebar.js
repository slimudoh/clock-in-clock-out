import React from "react";
import { NavLink } from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <NavLink to="/dashboard" exact>
          <div>
            <div className="sidebar_logo">
              <img src={require("../assets/images/dashboard.svg")} alt="" />
            </div>
            <div className="sidebar_name">Dashboard</div>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/users" exact>
          <div>
            <div className="sidebar_logo">
              <img src={require("../assets/images/user.svg")} alt="" />
            </div>
            <div className="sidebar_name">Users</div>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/supervisors" exact>
          <div>
            <div className="sidebar_logo">
              <img src={require("../assets/images/supervisor.svg")} alt="" />
            </div>
            <div className="sidebar_name">Supervisor</div>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/request" exact>
          <div>
            <div className="sidebar_logo">
              <img src={require("../assets/images/request.svg")} alt="" />
            </div>
            <div className="sidebar_name">
              Request
              <div className="sidebar_alert">99+</div>
            </div>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/dashboard" exact>
          <div>
            <div className="sidebar_logo">
              <img src={require("../assets/images/location.svg")} alt="" />
            </div>
            <div className="sidebar_name">Locations</div>
          </div>
        </NavLink>
      </div>

      <div>
        <NavLink to="/dashboard" exact>
          <div>
            <div className="sidebar_logo">
              <img src={require("../assets/images/pushmessage.svg")} alt="" />
            </div>
            <div className="sidebar_name">Push Messages</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
