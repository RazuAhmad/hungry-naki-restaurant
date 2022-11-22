import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./FindUs.css";
import Typewriter from "typewriter-effect";

const FindUs = () => (
  <div className="app__findUs section__padding app__bg" id="contact">
    <div className="app__findUs-content">
      <SubHeading title="Contact" />
      <h1 className="headText__cormorant">
        <Typewriter
          options={{
            strings: ["Find Us", ""],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="p__openSans">Kazi nazrul Islam Avenue, Dhaka,CW9 75G</p>
      <p className="p__cormorant">Opening Hours</p>
      <p className="p__openSans">Mon-Fri: 10.00 Am - 02.00 Am</p>
      <p className="p__openSans">Sat-Sun: 10.00 Am - 03.00 Am</p>
      <button className="custom__button">Visit Us</button>
    </div>
    <div className="app__findUs-image ">
      <img src={images.findUs} alt="findUsImg" />
    </div>
  </div>
);

export default FindUs;
