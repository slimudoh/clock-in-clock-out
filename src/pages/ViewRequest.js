import React, { useState } from "react";

import "../assets/css/reset.css";
import "../assets/css/app.scss";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function ViewRequest() {
  const [requestModal, setRequestModal] = useState(false);

  const openRequestModal = () => {
    setRequestModal(true);
  };

  const closeModal = () => {
    setRequestModal(false);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container">
        <div>
          <div className="container__nav">
            <p>
              <span className="container__nav--active">Dashboard</span> >{" "}
              <span className="container__nav--active">Request</span> >{" "}
              <span className="container__nav--inactive">Adewale</span>
            </p>
          </div>
          <div className="container_view_request">
            <div className="container_view_request_profile">
              <div className="container_view_request_profile_head">
                <div className="container_view_request_profile_avatar">
                  <img src={require("../assets/images/boy.png")} alt="avatar" />
                </div>
                <div className="container_view_request_profile_text">
                  <span>Adewale Michaelsn</span>
                  <p>Doctor</p>
                </div>
              </div>
              <div className="container_view_request_profile_body">
                <div className="container_view_request_profile_text">
                  <div>
                    <div className="container_view_request_profile_key">
                      ID Number
                    </div>
                    <div className="container_view_request_profile_value">
                      NMA152536344
                    </div>
                  </div>
                  <div>
                    <div className="container_view_request_profile_key">
                      Email
                    </div>
                    <div className="container_view_request_profile_value">
                      youremail@gmail.com
                    </div>
                  </div>
                  <div>
                    <div className="container_view_request_profile_key">
                      Phone
                    </div>
                    <div className="container_view_request_profile_value">
                      0987277777774
                    </div>
                  </div>
                  <div>
                    <div className="container_view_request_profile_key">
                      Date of Birth
                    </div>
                    <div className="container_view_request_profile_value">
                      11, May 1987
                    </div>
                  </div>
                  <div>
                    <div className="container_view_request_profile_key">
                      Gender
                    </div>
                    <div className="container_view_request_profile_value">
                      Male
                    </div>
                  </div>
                  <div>
                    <div className="container_view_request_profile_key">
                      Address
                    </div>
                    <div className="container_view_request_profile_value">
                      yaba lagos
                    </div>
                  </div>
                  <div>
                    <div className="container_view_request_profile_key">
                      Location
                    </div>
                    <div className="container_view_request_profile_value">
                      Shomolu
                    </div>
                  </div>
                </div>
                <div className="container_view_request_profile_btns">
                  <div
                    className="container_view_request_profile_approve"
                    onClick={openRequestModal}
                  >
                    Approve
                  </div>
                  <div className="container_view_request_profile_deny">
                    Deny
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {requestModal ? (
        <div className="container_request_modal">
          <div>
            <div className="request_modal_content">
              <div className="user_modal_content_header">
                <div className="user_modal_content_header_text">
                  <div className="user_modal_content_header_text__para">
                    Kindly assign a location
                    <div
                      className="user_modal_content_header_text__span"
                      onClick={closeModal}
                    >
                      x
                    </div>
                  </div>
                </div>
              </div>

              <div className="user_modal_content_details">
                <div>
                  <img src={require("../assets/images/boy.png")} alt="avatar" />
                </div>
                <span>Adewale Michaelsn</span>
                <p>Doctor</p>
              </div>
              <div className="user_modal_content_form">
                <div className="user_modal_content_form__input">
                  <div>
                    <select>
                      <option>Select Location</option>
                    </select>
                  </div>
                </div>

                <div className="user_modal_content_form__button">Done</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ViewRequest;
