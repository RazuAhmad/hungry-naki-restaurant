import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import navbarLogo from "../../assets/navbarLogo.png";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>

      <p>
        <a href="#menu">Menu</a>
      </p>
      <p>
        <a href="#awards">Awards</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app_navbar-title_img">
        <img src={navbarLogo} alt="app__logo" />
      </div>
      <div className="app_navbar-links">
        <Menu />
      </div>
      <div className="app_navbar-logInBooking">
        <p>Log In/Register</p>
        <div />
        <p>Book Table</p>
      </div>
      <div className="app_navbar-smallScreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallScreen_overlay flex__center  slide-bottom">
            <MdOutlineRestaurantMenu
              color="#fff"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <div className="app__navbar-smallScreen_links ">
              <p>
                <a onClick={() => setToggleMenu(false)} href="#home">
                  Home
                </a>
              </p>

              <p>
                <a onClick={() => setToggleMenu(false)} href="#menu">
                  Menu
                </a>
              </p>
              <p>
                <a onClick={() => setToggleMenu(false)} href="#awards">
                  Awards
                </a>
              </p>
              <p>
                <a onClick={() => setToggleMenu(false)} href="#contact">
                  Contact
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
