import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import navbarLogo from "../../assets/navbarLogo.png";
import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app_navbar-title_img">
      <img src={navbarLogo} alt="app__logo" />
    </div>
    <div className="app_navbar-links">
      <p>
        <a href="#home">Home</a>
      </p>

      <p>
        <a href="#menu">Menu</a>
      </p>
      <p>
        {" "}
        <a href="#awards">Awards</a>
      </p>
      <p>
        {" "}
        <a href="#contact">Contact</a>
      </p>
    </div>
    <div className="app_navbar-logInBooking">
      <p>Log In/Register</p>
      <div />
      <p>Book Table</p>
    </div>
  </nav>
);

export default Navbar;
