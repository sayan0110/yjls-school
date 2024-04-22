import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";

import './contactMe.css';

const Contactme = () => {
  return (
    <div id="contact" className="contact-section">
      <Slide direction="down">
        <span className="cont">Contact Us</span>
        <h1 className="cont-des">send your queries</h1>
      </Slide>
      <div className="container">
        <div className="form">

          <Slide direction="left">
            <form action='https://formspree.io/f/xyyrbnkk' method='POSTcontact'>

              <div className="name">
                <span>
                  <CgProfile />
                </span>
                <input type="text" placeholder="Your full name.." />
              </div>
              <div className="email">
                <span>
                  <MdAlternateEmail />
                </span>
                <input type="email" placeholder="Your email address.." />
              </div>
              <div className="message">
                <span className="messageIcon">
                  <FiMail />
                </span>
                <textarea cols="30" rows="10" placeholder="Message.."></textarea>
              </div>
              <button>Submit</button>
              
            </form>
          </Slide>

        </div>
      </div>
    </div>
  );
};

export default Contactme;
