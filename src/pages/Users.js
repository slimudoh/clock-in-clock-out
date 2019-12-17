import React from "react";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Notification from "../components/Notification";

function Users() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Notification />
      <div className="container" style={{ paddingRight: "270px" }}>
        <div>
          <div className="container__nav">
            <p>
              <span className="container__nav--active">Dashboard</span> >{" "}
              <span className="container__nav--inactive">Manage users</span>
            </p>
          </div>
          <div className="container_user_add">
            <div>
              <div className="container_user_add__img">
                <img src={require("../assets/images/add-user.svg")} alt="" />
              </div>
              <div className="container_user_add__text">Add User</div>
            </div>
          </div>
          <div className="container_user_search">
            <p>Find users</p>
            <form>
              <div>
                <div className="container_user_search__input">
                  <input
                    type="text"
                    placeholder="Enter user's name, phone number, or ID"
                  />
                </div>
                <div className="container_user_search__button">
                  <button>Find user</button>
                </div>
              </div>
            </form>
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

export default Users;
