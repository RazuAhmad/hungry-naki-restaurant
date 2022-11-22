import React from "react";
import meal from "../../assets/meal.mp4";

import "./Intro.css";

const Intro = () => (
  <div className="app__intro app__bg">
    <video className="video" controls loop src={meal}></video>
  </div>
);

export default Intro;
