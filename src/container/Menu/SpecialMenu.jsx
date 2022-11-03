import React from "react";
import images from "../../constants/images";
import { FruitJuice, BengaliVorta } from "../../constants/data.js";
import "./SpecialMenu.css";
import { MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className="app__todaysSpecial section__padding">
    <div className="app__todaysSpecial-Heading">
      <p className="p__cormorant">Menu That Fits You Palatte</p>
      <p>
        <img src={images.spoon} alt="Spoon" />
      </p>
      <h1 className="headText__cormorant">Today's Special</h1>
    </div>
    <div className="app_specialMenu-container">
      <div className="app__special_fruits-Juice">
        <h2 style={{ color: "white" }}>Fruits & Juices</h2>
        {FruitJuice.map((juiceItems, index) => (
          <MenuItem
            key={index}
            title={juiceItems.title}
            price={juiceItems.price}
            tags={juiceItems.tags}
          />
        ))}
      </div>
      <div className="app__specialMenu-Image">
        <img src={images.menu} alt="" />
      </div>
      <div className="app__special_bengali-vorta">
        <h2 style={{ color: "white" }}>Bengali Traditional Vortas</h2>
        {BengaliVorta.map((VortaItems, index) => (
          <MenuItem
            key={index}
            title={VortaItems.title}
            price={VortaItems.price}
            tags={VortaItems.tags}
          />
        ))}
      </div>
    </div>
  </div>
);

export default SpecialMenu;
