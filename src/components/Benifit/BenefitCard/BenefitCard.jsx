import React from "react";
import "./benefitCard.scss";

const BenefitCard = ({ data}) => {
  return (
    <div className="benefit-card">
      {data.map((item) => {
        return (
          <div className="card-section" style={{}}>
            <div className="card-title">
              <span className="title-bullet">&#x2022;</span> {item.title}
            </div>
            <div className="card-para">
              <p className="text-one">
                <span className="para-bullet">&#x2022;</span>
                {item.textOne}
              </p>
              <p className="text-two">
                <span className="para-bullet">&#x2022;</span>
                {item.textTwo}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BenefitCard;
