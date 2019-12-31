import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../store/actions";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Notification from "../components/Notification";
import PageLoader from "../components/PageLoader";

function Users() {
  let history = useHistory();

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auths.isLoggedIn);
  const allUsers = useSelector(state => state.users.users);

  const [profileModal, setProfileModal] = useState(false);
  const [accountModal, setAccountModal] = useState(false);
  const [pageloader, setPageloader] = useState(true);

  useEffect(() => {
    const checkIsAuthenticated = () => {
      if (!isAuth) {
        dispatch(actionCreators.logout());
        return;
      }

      if (allUsers) {
        setPageloader(false);
      }
    };
    checkIsAuthenticated();
  });

  const addUserModal = () => {
    setProfileModal(true);
    setAccountModal(false);
  };

  const openAccountModal = () => {
    setProfileModal(false);
    setAccountModal(true);
  };

  const closeModal = () => {
    setProfileModal(false);
    setAccountModal(false);
  };

  const addUser = () => {
    setProfileModal(false);
    setAccountModal(false);
  };

  const viewUser = () => {
    history.push("/view-user");
  };

  const searchdata = e => {
    e.preventDefault();
    console.log("search");
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <Notification />
      <div className="container" style={{ paddingRight: "270px" }}>
        {pageloader ? (
          <div>
            <PageLoader />
          </div>
        ) : (
          <div>
            <div className="container__nav">
              <p>
                <span className="container__nav--active">Dashboard</span> >{" "}
                <span className="container__nav--inactive">Manage users</span>
              </p>
            </div>
            <div className="container_user_add">
              <div className="container_user_add__btn" onClick={addUserModal}>
                <div className="container_user_add__img">
                  <img src={require("../assets/images/add-user.svg")} alt="" />
                </div>
                <div className="container_user_add__text">Add User</div>
              </div>
            </div>
            <div className="container_user_search">
              <p>Find users</p>
              <form onSubmit={searchdata}>
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
                  <div className="dash_table_header_text">
                    Recent enrolments
                  </div>
                  <div className="dash_table_header_link">View All</div>
                </div>
                <div className="dash_table_body">
                  <div className="dash_table_body__thead">
                    <div>Name</div>
                    <div>Profession</div>
                    <div>Location</div>
                    <div>Date</div>
                    <div>Status</div>
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
                        <div className="dash_table_body__tbody_red"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {profileModal ? (
        <div className="container_user_add_profile">
          <div>
            <div className="user_modal_content">
              <div className="user_modal_content_header">
                <div className="user_modal_content_header_text">
                  <div className="user_modal_content_header_text__para">
                    Add user
                    <div
                      className="user_modal_content_header_text__span"
                      onClick={closeModal}
                    >
                      x
                    </div>
                  </div>
                </div>
                <div className="user_modal_content_header_nav">
                  <div className="user_modal_content_header_nav_circle_selected"></div>
                  <div className="user_modal_content_header_nav_line"></div>
                  <div className="user_modal_content_header_nav_circle"></div>
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
                  <label>Email</label>
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

                <div className="user_modal_content_form__input">
                  <label>Identifications</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>

                <div className="user_modal_content_form__input">
                  <label>Date of Birth</label>
                  <div>
                    <input type="text" />
                    <div>
                      <img
                        src={require("../assets/images/calendar.svg")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="user_modal_content_form__checkbox">
                  <label>Gender</label>
                  <div>
                    <div>
                      <p>Female</p> <input type="checkbox" />
                    </div>
                    <div>
                      <p>Male</p> <input type="checkbox" />
                    </div>
                  </div>
                </div>

                <div
                  className="user_modal_content_form__button"
                  onClick={openAccountModal}
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {accountModal ? (
        <div className="container_user_add_account">
          <div>
            <div className="user_modal_content">
              <div className="user_modal_content_header">
                <div className="user_modal_content_header_text">
                  <div className="user_modal_content_header_text__para">
                    Add user
                    <div
                      className="user_modal_content_header_text__span"
                      onClick={closeModal}
                    >
                      x
                    </div>
                  </div>
                </div>
                <div className="user_modal_content_header_nav">
                  <div className="user_modal_content_header_nav_circle"></div>
                  <div className="user_modal_content_header_nav_line"></div>
                  <div className="user_modal_content_header_nav_circle_selected"></div>
                </div>
              </div>
              <div className="user_modal_content_form">
                <div className="user_modal_content_form__input">
                  <label>Account Number</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>

                <div className="user_modal_content_form__input">
                  <label>Bank name</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>

                <div className="user_modal_content_form__input">
                  <label>BVN</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>

                <div className="user_modal_content_form__input">
                  <label>Residential Address</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>

                <div className="user_modal_content_form__input">
                  <label>LGA</label>
                  <div>
                    <select>
                      <option></option>
                    </select>
                  </div>
                </div>

                <div
                  className="user_modal_content_form__button"
                  onClick={addUser}
                >
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Users;
