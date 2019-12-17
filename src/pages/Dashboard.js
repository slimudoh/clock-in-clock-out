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
      <div className="container" style={{ paddingRight: "270px" }}>
        <div>
          <div className="container__nav">
            <p>Dashboard</p>
          </div>
          <div className="container_card">
            <div>
              <div className="dash_card_user">
                <span>Total user</span>
                <p>20,000,000:00</p>
              </div>
            </div>
            <div>
              <div className="dash_card_clock">
                <span>Total user</span>
                <p>20,000,000:00</p>
              </div>
            </div>
            <div>
              <div className="dash_card_reject">
                <span>Total user</span>
                <p>20,000,000:00</p>
              </div>
            </div>
          </div>
          <div className="dash_table">
            <div>
              <div className="dash_table_header">
                <div className="dash_table_header_text">Recent enrolments</div>
                <div className="dash_table_header_link">View All</div>
              </div>
              <div className="dash_table_body">
                <div className="dash_table_body__thead">
                  <div>Name</div>
                  <div>Profession</div>
                  <div>Location</div>
                  <div>date</div>
                  <div>Status</div>
                </div>
                <div className="dash_table_body__tbody">
                  <div>
                    <div>
                      <div className="dash_table_body__tbody_img">
                        <img
                          src={require("../assets/images/boy.png")}
                          alt="user"
                        />
                      </div>

                      <p>Adewale Michaelson</p>
                    </div>
                    <div>Doctor</div>
                    <div>Shomolu</div>
                    <div>21 May 2019</div>
                    <div>
                      <div className="dash_table_body__tbody_green"></div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="dash_table_body__tbody_img">
                        <img
                          src={require("../assets/images/boy.png")}
                          alt="user"
                        />
                      </div>

                      <p>Adewale Michaelson</p>
                    </div>
                    <div>Doctor</div>
                    <div>Shomolu</div>
                    <div>21 May 2019</div>
                    <div>
                      <div className="dash_table_body__tbody_red"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
