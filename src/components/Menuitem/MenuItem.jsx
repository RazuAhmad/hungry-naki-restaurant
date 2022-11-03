import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem-container">
    <div className="app__menuItem-titleDashPrice">
      <div className="app__menuItem-title">
        <p style={{ color: "white" }}>{title}</p>
      </div>
      <div className="app__menuItem-dash" />
      <div className="app__menuItem-price">
        <p style={{ color: "white" }}>{price}</p>
      </div>
    </div>
    <div className="app__menuItem-tags">
      <p style={{ color: "white" }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
