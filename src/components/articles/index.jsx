import React from "react";
import Button from "../button";
import articles_1 from "../../assets/images/articles_1.png";
import articles_2 from "../../assets/images/articles_2.png";
import "./Articles.css";

const Articles = () => {
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
          <div>
            <Button text="Get a free quote" />
            <Button style={customStyle} text="Explore services" />
          </div>
        </div>
        <div className="articles-card">
          {React.Children.toArray(
            [
              {
                imageUrl: articles_1,
                title:
                  "8 best vacuum cleaners to clean any mess for your home in 2022",
                description:
                  "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
                time: "Jan 28, 2022",
              },
              {
                imageUrl: articles_2,
                title:
                  "How to properly disinfect your phone and other electronics",
                description:
                  "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.",
                time: "Feb 1, 2022",
              },
            ].map((el, idx) => (
              <div className="articles-card-item" key={idx}>
                <img src={el.imageUrl} alt={el.title} />
                <div className="articles-card-item-body">
                  <h2>{el.title}</h2>
                  <p>{el.description}</p>
                  <div className="services-card-time">
                    <p>{el.time}</p>
                    <div className="btn"></div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Articles;
