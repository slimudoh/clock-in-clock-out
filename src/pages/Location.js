import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Location() {
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
              <span className="container__nav--active">Requests</span> >{" "}
              <span className="container__nav--inactive">run outreach</span>
            </p>
          </div>

          <div className="location_download">
            <div>
              <div className="location_download_xls">
                <div className="location_download_xls_icon">
                  <img src={require("../assets/images/xls.svg")} alt="" />
                </div>
                <p>Download report</p>
                <div className="location_download_xls_arrow">
                  <img src={require("../assets/images/droparrow.svg")} alt="" />
                </div>
              </div>
              <div className="location_download_pdf">
                <div className="location_download_pdf_icon">
                  <img src={require("../assets/images/pdf.svg")} alt="" />
                </div>
                <p>Download report</p>
                <div className="location_download_pdf_arrow">
                  <img src={require("../assets/images/droparrow.svg")} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="location_btns">
            <div className="location_btns_location">
              <div className="location_btns_location_text">Locations</div>
              <div className="location_btns_location_dropdown">
                <select>
                  <option>The run outreach</option>
                </select>
              </div>
              <div className="location_btns_location_filter">Filter</div>
            </div>
            <div className="location_btns_btn">
              <div>All</div>
              <div style={{ color: "#fff", backgroundColor: "#585598" }}>
                Active
              </div>
              <div>Inactive</div>
            </div>
            <div className="location_btns_search">
              <input type="text" placeholder="Search" />
              <div>
                <img src={require("../assets/images/search.svg")} alt="" />
              </div>
            </div>
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

export default Location;
