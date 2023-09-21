import React from "react";
import Input from "../input";
import phone from "../../assets/images/phone.svg";
import Button from "../button";
import "./Contact.css";

export const Contact = () => {
  const customStyle = {
    marginTop: "10px",
    color: "#211F54",
    backgroundColor: "white",
    border: "1px solid #EFF0F6",
    boxShadow: "0px 4px 10px 0px rgba(20, 20, 43, 0.04)",
  };
  return (
    <section id="contact">
      <div className="container contact">
        <div className="contact-left">
          <h1>Contact Us</h1>
          <p>
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <div className="contact-left-bottom">
            <img height={65} src={phone} alt="phone" />
            <div className="contact-left-bottom-item">
              <span>Call us now</span>
              <p>(414) 567 - 2109</p>
            </div>
          </div>
          <hr className="hr" style={{ marginBottom: "45px" }} />
          <h2>Not convinced yet?</h2>
          <span>
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </span>
          <Button style={customStyle} text="Browse our packages" />
        </div>
        <div className="contact-right">
          <Input label="Full name" name="name" type="text" />
          <Input label="Phone number" name="number" type="number" />
          <Input label="Address" name="Address" type="text" />
          <Input label="Email" name="email" />
          <Input label="Requested service" name="Requested service" />
          <Input label="Day of service" name="Day of service" type="text" />
          <div>
            <textarea
              name="textarea"
              id="sad"
              cols="56"
              rows="5"
              className="textarea"
            ></textarea>{" "}
            <div style={{marginBottom: '100px'}}>
              <Button text="Submit message" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
