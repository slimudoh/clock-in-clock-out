import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as types from "../store/constant";
import axios from "axios";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Notification from "../components/Notification";

function Supervisors() {
  let history = useHistory();

  const [supervisorModal, setSupervisorModal] = useState(false);

  useEffect(() => {
    axios
      .get(types.DEMO__PATH)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  });

  const addSupervisor = () => {
    setSupervisorModal(true);
  };

  const closeModal = () => {
    setSupervisorModal(false);
  };

  const viewSupervisor = () => {
    history.push("/view-user");
  };

  const createSupervisor = () => {
    setSupervisorModal(false);
  };

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
              <span className="container__nav--inactive">Supervisors</span>
            </p>
          </div>
          <div className="container_user_add">
            <div className="container_user_add__btn" onClick={addSupervisor}>
              <div className="container_user_add__img">
                <img src={require("../assets/images/add-user.svg")} alt="" />
              </div>
              <div className="container_user_add__text">Add Supervisor</div>
            </div>

            <div className="container_user_add__search">
              <form>
                <input type="text" placeholder="Search" />
              </form>

              <div>
                <img src={require("../assets/images/search.svg")} alt="" />
              </div>
            </div>
          </div>

          <div className="supervisor_table">
            <div>
              <div className="dash_table_header">
                <div className="dash_table_header_text">Supervisors</div>
              </div>
              <div className="dash_table_body">
                <div className="dash_table_body__thead">
                  <div>Name</div>
                  <div>Location</div>
                  <div>Status</div>
                  <div>Action</div>
                </div>
                <div className="dash_table_body__tbody">
                  <div>
                    <div onClick={viewSupervisor}>
                      <div className="dash_table_body__tbody_img">
                        <img
                          src={require("../assets/images/boy.png")}
                          alt="user"
                        />
                      </div>

                      <p>Adewale Michaelson</p>
                    </div>
                    <div>Red violet Health system</div>
                    <div>
                      <div className="dash_table_body__tbody_green"></div>
                    </div>
                    <div>&#x2b;</div>
                  </div>

                  <div>
                    <div onClick={viewSupervisor}>
                      <div className="dash_table_body__tbody_img">
                        <img
                          src={require("../assets/images/boy.png")}
                          alt="user"
                        />
                      </div>

                      <p>Adewale Michaelson</p>
                    </div>
                    <div>Red violet Health system</div>
                    <div>
                      <div className="dash_table_body__tbody_red"></div>
                    </div>
                    <div>&#x2b;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {supervisorModal ? (
        <div className="container_user_add_profile">
          <div>
            <div className="user_modal_content">
              <div className="user_modal_content_header">
                <div className="user_modal_content_header_text">
                  <div className="user_modal_content_header_text__para">
                    Create Supervisor
                    <div
                      className="user_modal_content_header_text__span"
                      onClick={closeModal}
                    >
                      x
                    </div>
                  </div>
                </div>
                <div className="user_modal_content_header_nav">
                  <div className="user_modal_content_header_nav_line"></div>
                </div>
              </div>
              <div className="user_modal_content_form">
                <div className="user_modal_content_form__input">
                  <label>First name</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>

                <div className="user_modal_content_form__input">
                  <label>Last name</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>

                <div className="user_modal_content_form__input">
                  <label>Job description</label>
                  <div>
                    <select>
                      <option></option>
                    </select>
                  </div>
                </div>

                <div
                  className="user_modal_content_form__button"
                  onClick={createSupervisor}
                >
                  Create Supervisor
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Supervisors;
