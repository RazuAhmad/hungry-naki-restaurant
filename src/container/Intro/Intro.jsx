import React from "react";
import meal from "../../assets/meal.mp4";

import "./Intro.css";

const Intro = () => (
  <div className="app__intro app__bg">
    <video
      controls
      loop
      style={{ width: "100%", height: "100%" }}
      src={meal}
    ></video>
  </div>
);

export default Intro;
