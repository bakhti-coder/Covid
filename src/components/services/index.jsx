import React from "react";
import Button from "../button";
import house1 from "../../assets/images/house1.png";
import house2 from "../../assets/images/house2.png";
import house3 from "../../assets/images/house3.png";
import covid from "../../assets/images/covif.png";
import phone from "../../assets/images/phone.svg";
import "./Services.css";

const Services = () => {
  const customStyle = {
    marginLeft: "20px",
    color: "#211F54",
    backgroundColor: "white",
    border: "1px solid #EFF0F6",
    boxShadow: "0px 4px 10px 0px rgba(20, 20, 43, 0.04)",
  };
  return (
    <section>
      <div className="container">
        <div className="services-title">
          <h1>Our Services</h1>
          <Button style={customStyle} text="Explore services" />
        </div>
        <div className="services-item">
          {React.Children.toArray(
            [
              {
                imageUrl: house1,
                title: "House cleaning",
                description:
                  "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
              },
              {
                imageUrl: house2,
                title: "office cleaning",
                description:
                  "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
              },
              {
                imageUrl: house3,
                title: "Industrial cleaning",
                description:
                  "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
              },
            ].map((el, idx) => (
              <div className="services-card-item" key={idx}>
                <img src={el.imageUrl} alt={el.title} />
                <div className="services-card-item-body">
                  <h2>{el.title}</h2>
                  <p>{el.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="covid">
          <div className="covid-left">
            <img src={covid} alt="covid" />
          </div>
          <div className="covid-right">
            <h5>Covid-19 sanitization</h5>
            <h2>
              We follow guidelines to keep you safe from the COVID-19 virus
            </h2>
            <p>
              Lobortis mattis odio leo eget mauris met aliquet semper molestie
              sollicitudin congue massa mauris lectus.
            </p>
            <div className="main-bottom">
              <div>
                <Button text="Get a free quote" />
              </div>
              <div className="main-left-bottom">
                <img height={65} src={phone} alt="phone" />
                <div className="main-left-bottom-item">
                  <span>Call us now</span>
                  <p>(414) 567 - 2109</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr" />
      </div>
    </section>
  );
};

export default Services;
