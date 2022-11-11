import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__footer-newsLetter">
    <SubHeading title="News Letter" />
    <h1 className="headText__cormorant">Subscribe To Our Newsletter</h1>
    <p className="p__openSans">And Never Miss Latest Updates!</p>
    <p>
      <input type="email" placeholder="enter your email" />{" "}
      <button className="custom__button">Subscribe</button>
    </p>
  </div>
);

export default Newsletter;
