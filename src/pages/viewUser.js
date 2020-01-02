import React, { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function ViewUser() {
  const [activity, setActivity] = useState(true);
  const [bio, setBio] = useState(false);
  const [bank, setBank] = useState(false);

  const showActivity = () => {
    setActivity(true);
    setBio(false);
    setBank(false);
  };

  const showBio = () => {
    setActivity(false);
    setBio(true);
    setBank(false);
  };

  const showBank = () => {
    setActivity(false);
    setBio(false);
    setBank(true);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container" style={{ paddingRight: "20px" }}>
        <div>
          <div className="container__nav">
            <p>
              <span className="container__nav--active">Dashboard</span> >{" "}
              <span className="container__nav--inactive">Users</span> >{" "}
              <span className="container__nav--inactive">Adewale</span>
            </p>
          </div>
          <div className="container_view_user">
            <div className="container_view_user_profile">
              <div className="container_view_user_profile_date">
                2, Mar 2019
              </div>
              <div className="container_view_user_profile_avatar">
                <div>
                  <div className="container_view_user_profile_img">
                    <img
                      src={require("../assets/images/boy.png")}
                      alt="avatar"
                    />
                  </div>
                  <div className="container_view_user_profile_online"></div>
                  <div></div>
                </div>
                <p>Adewale Michael</p>
                <span>Doctor</span>
              </div>
              <div className="container_view_user_profile_time">
                <div>
                  <div className="container_view_user_profile_time_thin">
                    Time in
                  </div>
                  <div className="container_view_user_profile_time_arrow">
                    &#8594;
                  </div>
                  <div className="container_view_user_profile_time_thin">
                    Time out
                  </div>
                </div>
                <div>
                  <div className="container_view_user_profile_time_bold">
                    09: 58am
                  </div>
                  <div className="container_view_user_profile_time_arrow"></div>
                  <div className="container_view_user_profile_time_bold">
                    Pending
                  </div>
                </div>
              </div>
            </div>
            <div className="container_view_user_data">
              <div className="container_view_user_data__header">
                <div
                  onClick={showActivity}
                  style={{
                    borderBottom: activity ? "2px solid #585598" : null
                  }}
                >
                  Activity
                </div>
                <div
                  onClick={showBio}
                  style={{
                    borderBottom: bio ? "2px solid #585598" : null
                  }}
                >
                  Biodata
                </div>
                <div
                  onClick={showBank}
                  style={{
                    borderBottom: bank ? "2px solid #585598" : null
                  }}
                >
                  Bank Details
                </div>
              </div>
              <div className="container_view_user_data__body">
                {activity ? (
                  <div>
                    <div>
                      <div className="container_view_user_data_bio">
                        <div className="container_view_user_data_bio__btns">
                          <div>
                            <div className="container_view_user_data_bio__btns_xls">
                              <div>
                                <img
                                  src={require("../assets/images/xls.svg")}
                                  alt="xls"
                                />
                              </div>
                              <p>Download report</p>
                            </div>
                            <div className="container_view_user_data_bio__btns_pdf">
                              <div>
                                <img
                                  src={require("../assets/images/pdf.svg")}
                                  alt="pdf"
                                />
                              </div>
                              <p>Download report</p>
                            </div>
                            <div className="container_view_user_data_bio__btns_filter">
                              Filter
                              <div>
                                <div>
                                  Weekly <input type="checkbox" />
                                </div>
                                <div>
                                  Monthly <input type="checkbox" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container_view_user_data_bio_table">
                          <div className="container_view_user_data_bio_table__thead">
                            <div>Office</div>
                            <div>Date</div>
                            <div>Time in</div>
                            <div>Time out</div>
                            <div>Time spent</div>
                          </div>
                          <div className="container_view_user_data_bio_table__tbody">
                            <div>
                              <div>The Medical house</div>
                              <div>12/03/2019</div>
                              <div>09:53 AM</div>
                              <div>09:53 AM</div>
                              <div>12 Hrs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* hr */}

                {bio ? (
                  <div>
                    <div>
                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">
                          ID Number
                        </div>
                        <div className="container_view_user_data_value">
                          NMA1827656726/FG1
                        </div>
                      </div>
                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">
                          Email
                        </div>
                        <div className="container_view_user_data_value">
                          adewale.michael@gmail.com
                        </div>
                      </div>
                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">
                          Phone
                        </div>
                        <div className="container_view_user_data_value">
                          09087673837
                        </div>
                      </div>

                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">
                          Date of Birth
                        </div>
                        <div className="container_view_user_data_value">
                          11, May 1985
                        </div>
                      </div>

                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">
                          Gender
                        </div>
                        <div className="container_view_user_data_value">
                          Male
                        </div>
                      </div>

                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">
                          Address
                        </div>
                        <div className="container_view_user_data_value">
                          123, zero park lane, Maryland
                        </div>
                      </div>

                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">
                          Location
                        </div>
                        <div className="container_view_user_data_value">
                          Onigbongbo
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* hr */}

                {bank ? (
                  <div>
                    <div>
                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">bank</div>
                        <div className="container_view_user_data_value">
                          Access bank
                        </div>
                      </div>
                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">
                          Account No
                        </div>
                        <div className="container_view_user_data_value">
                          1234567890
                        </div>
                      </div>
                      <div className="container_view_user_data_bank">
                        <div className="container_view_user_data_key">BVN</div>
                        <div className="container_view_user_data_value">
                          1234567890
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
