import React, { useState } from "react";
import { BsHouse } from "react-icons/bs";
import Modal from "react-modal";
import WithToolTip from "./ToolTip";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#264653",
  },
};

function refreshPage() {
  window.location.reload();
}

Modal.setAppElement("#root");

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div className="title" id="startShow">
        <h1>
          Fun dog <BsHouse />{" "}
        </h1>
      </div>

      <div id="navbar">
        <ul className="navlink">
          <li href="#">
            <WithToolTip toolTipText={"Load new images"}>
              <button className="btn btn-refresh" onClick={refreshPage}>
                refresh
              </button>
            </WithToolTip>
          </li>
          <li href="#">
            <WithToolTip toolTipText={""}>
              <button className="btn" onClick={() => setModalIsOpen(true)}>
                info
              </button>
            </WithToolTip>
          </li>
        </ul>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h1>
          Welcome to dog Fun <BsHouse />
        </h1>
        <hr></hr>
        <h2>Author: Keng Hwee Tan</h2>
        <h2>Contact: tankenghwee1996@gmail.com</h2>
        <p>Credit Images: api.thedogapi.com</p>
        <div>
          <button className="btn" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
