import React from "react";
import { useHistory } from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Request() {
  let history = useHistory();

  const viewUser = () => {
    history.push("/view-request");
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container" style={{ paddingRight: "50px" }}>
        <div>
          <div className="container__nav">
            <p>
              <span className="container__nav--active">Dashboard</span> >{" "}
              <span className="container__nav--inactive">Requests</span>
            </p>
          </div>

          <div className="request_table">
            <div>
              <div className="dash_table_header">
                <div className="dash_table_header_text">Requests</div>
              </div>
              <div className="dash_table_body">
                <div className="dash_table_body__thead">
                  <div>Name</div>
                  <div>Profession</div>
                  <div>Location</div>
                  <div>Date</div>
                  <div>Status</div>
                  <div>Action</div>
                </div>
                <div className="dash_table_body__tbody">
                  <div>
                    <div onClick={viewUser}>
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
                    <div>
                      &#x2b;
                      <div className="dash_table_body__tbody_slideout">
                        <div>Accept</div>
                        <div>Reject</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div onClick={viewUser}>
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
                    <div>
                      &#x2b;
                      <div className="dash_table_body__tbody_slideout">
                        <div>Accept</div>
                        <div>Reject</div>
                      </div>
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

export default Request;
