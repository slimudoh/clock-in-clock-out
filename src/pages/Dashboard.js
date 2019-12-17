import React from "react";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Notification from "../components/Notification";

function Dashboard() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Notification />
    </div>
  );
}

export default Dashboard;
