import React, { useState } from "react";
import "./modal.css";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setShowModal(true)}>modal open</button>
      </div>
      {showModal && (
        <div
          className={`${
            !showModal ? "display-none" : "display-block"
          } modal-container`}
          onClick={() => {
            setShowModal(false);
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className="para">Do you want to continue </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;