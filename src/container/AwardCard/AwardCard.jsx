import React from "react";
import "./AwardCard.css";
const AwardCard = ({ awardImg, title, subtitle }) => {
  return (
    <div className="app__awardCard-container ">
      <div className="app__awardCard-image">
        <img src={awardImg} alt="awardImg" />
      </div>
      <div className="app__awardCard-content">
        <h2 className="p__cormorant">{title}</h2>
        <p className="p__openSans">{subtitle}</p>
      </div>
    </div>
  );
};

export default AwardCard;
