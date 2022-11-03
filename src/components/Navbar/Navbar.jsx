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
      <p>Home</p>
      <p>About</p>
      <p>Menu</p>
      <p>Awards</p>
      <p>Contact</p>
    </div>
    <div className="app_navbar-logInBooking">
      <p>Log In/Register</p>
      <div />
      <p>Book Table</p>
    </div>
  </nav>
);

export default Navbar;
