import React, { useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Messages() {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container" style={{ paddingRight: "100px" }}>
        <div>
          <div className="container__nav">
            <p>
              <span className="container__nav--active">Dashboard</span> >{" "}
              <span className="container__nav--inactive">Push messages</span>
            </p>
          </div>
          <div className="messages_header">
            <div className="messages_header_text">Messages</div>
            <div className="messages_header_btn">
              <div className="messages_header_btn_text">Location</div>
              <div className="messages_header_btn_dropdown">
                <select>
                  <option>The run outreach</option>
                </select>
              </div>
              <div className="messages_header_btn_btn" onClick={showModal}>
                New Message
              </div>
            </div>
          </div>
          <div className="container_view_user">
            <div className="message_body">
              <div className="message_body_search">
                <input type="text" placeholder="Search" />
                <div>
                  <img src={require("../assets/images/search.svg")} alt="" />
                </div>
              </div>
              <div className="message_body_list">
                <div>
                  <div className="message_body_list_avatar">
                    <img src={require("../assets/images/boy.png")} alt="" />
                  </div>
                  <div className="message_body_list_text">
                    <span>Adewale Johnson</span>
                    <p>The report you gave last night was not htest </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="message_story">
              <div>
                <div>
                  <img src={require("../assets/images/chat.svg")} alt="chat" />
                </div>
                <p>Message thread will appear here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <div className="container_message_modal">
          <div>
            <div className="message_modal_content">
              <div className="message_modal_content_header">
                <div>New Message</div>
                <p onClick={closeModal}>X</p>
              </div>
              <div className="message_modal_content_body">
                <div className="message_modal_content_body_location">
                  <select>
                    <option>Location</option>
                  </select>
                </div>
                <div className="message_modal_content_body_form">
                  <form>
                    <div className="message_modal_content_body_to">
                      <input type="text" />
                      <div>To</div>
                    </div>
                    <div className="message_modal_content_body_subject">
                      <input type="text" />
                      <div>Subject</div>
                    </div>
                    <textarea></textarea>
                  </form>
                </div>
                <div className="message_modal_content_body_btn">
                  <div>Send</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Messages;
