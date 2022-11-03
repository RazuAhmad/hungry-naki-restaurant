import React from "react";
import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header section__padding">
    <div className="app__header-textual-part">
      <SubHeading title="Chase The New Flavour" />
      <h1>
        THE KEY TO FINE <br />
        DINING
      </h1>
      <p>
        Hungry Naki Restaurant offers a wide variety of mixed cuisine, prepared
        in a healthy environment to ensure a delicious meal to enjoy. Open today
        until 23:00
      </p>
      <p>
        <button className="custom__button">Explore Menu</button>
      </p>
    </div>
    <div className="app__header-image">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
