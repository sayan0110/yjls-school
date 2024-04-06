import React, { useState } from "react";
import "./popup.css";

import close from "../A_media/close.png";

function Popup(props) {
  const [isOpen, setIsOpen] = useState(true);

  const popupClose = () => {
    setIsOpen(false);
  };
  return (
    <div >
      {isOpen ? (
        <div className="popup">
          <div className="offers">
            <button className="close-btn" onClick={popupClose}>
              <img src={close} alt="close" />
            </button>
            <h4>Hurry up! Limited time only ✨</h4>
            <h1>Book your clases before the offer ends 🎉</h1>
            <h3>Get exclusive discounts, new course offers and other good stuff ✨</h3>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Popup;
