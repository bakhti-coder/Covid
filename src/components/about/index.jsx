import React from "react";
import Button from "../button";
import calendar from "../../assets/images/calendar.png";
import bankCard from "../../assets/images/bankcard.png";
import changyutkich from "../../assets/images/plisos.png";
import "./About.css";

export const About = () => {
  const customStyle = {
    marginLeft: "20px",
    color: "#211F54",
    backgroundColor: "white",
    border: "1px solid #EFF0F6",
    boxShadow: "0px 4px 10px 0px rgba(20, 20, 43, 0.04)",
  };
  return (
    <section style={{ paddingBottom: "100px" }}>
      <div className="container about">
        <div className="about-tit">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        <div className="about-card">
          {React.Children.toArray(
            [
              {
                imageUrl: calendar,
                title: "1. Schedule online",
                description:
                  "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.",
              },
              {
                imageUrl: bankCard,
                title: "2. Pay online easily",
                description:
                  "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.",
              },
              {
                imageUrl: changyutkich,
                title: "3. Get your house cleaned",
                description:
                  "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.",
              },
            ].map((el, idx) => (
              <div className="about-card-item" key={idx}>
                <img src={el.imageUrl} alt={el.title} />
                <div className="about-card-item-body">
                  <h2>{el.title}</h2>
                  <p>{el.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="about-bottom">
          <Button text="Get a free quote" />
          <Button text="Explore services" style={customStyle} />
        </div>
      </div>
    </section>
  );
};

export default About;
