import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { Slide } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import './contactMe.css';

const Contactme = () => {
  const { register, reset, handleSubmit } = useForm();
  const [result, setResult] = useState(null);

  const accessKey = "4487efde-7c51-4aeb-8af3-96b3ec5a49e9";

  // Use the useWeb3Forms hook to handle form submission
  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,

    settings: {
      from_name: "YJLS",
      subject: "Yume Japanese language School Enquiry",
    },

    onSuccess: (msg, data) => {
      setResult(msg);
      reset(); // Reset form after successful submission
    },
    
    onError: (msg, data) => {
      setResult(msg);
    },
  });

  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    const { name, message } = formData;
    const fromName = name || "Anonymous";

    // eslint-disable-next-line
    const subject = `New Contact Message from ${fromName} : ${message}`;

    // Update settings with dynamic values
    onSubmit({
      ...formData,
    });
  };

  return (
    <div id="contact" className="contact-section">
      <Slide direction="down">
        <span className="cont">Contact Us</span>
        <h1 className="cont-des">send your queries</h1>
      </Slide>
      <div className="container">
        <div className="form">
          <Slide direction="left">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="name">
                <span>
                  <CgProfile />
                </span>
                <input type="text" placeholder="Your full name.." {...register("name")} />
              </div>
              <div className="email">
                <span>
                  <MdAlternateEmail />
                </span>
                <input type="email" placeholder="Your email address.." {...register("email", { required: true })} />
              </div>
              <div className="message">
                <span className="messageIcon">
                  <FiMail />
                </span>
                <textarea cols="30" rows="10" placeholder="Message.." {...register("message", { required: true })}></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </Slide>
        </div>
      </div>
      {result && <div>{result}</div>}
    </div>
  );
};

export default Contactme;
