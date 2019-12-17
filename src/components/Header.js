import React from "react";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">LOGO</div>
      <div className="header_avatar">
        <img src={require("../assets/images/boy.png")} alt="user" />
      </div>
    </div>
  );
}

export default Header;
