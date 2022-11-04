import React from "react";
import { SubHeading } from "../../components";
import navbarLogo from "../../assets/navbarLogo.png";
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandTwitter } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";
import "./Footer.css";
import images from "../../constants/images";

const Footer = () => (
  <div className="app__footer section__padding app__bg">
    <div className="app__footer-newsLetter">
      <SubHeading title="News Letter" />
      <h1 className="headText__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__openSans">And Never Miss Latest Updates!</p>
      <p>
        <input type="email" placeholder="enter your email" />{" "}
        <button className="custom__button">Subscribe</button>
      </p>
    </div>
    <div className="app__footer-contactUs">
      <div className="app__footer-contactUs1">
        <p className="p__cormorant">Contact Us</p>
        <p className="p__openSans">Kazi Nazrul Islam Avenue, Dhaka,CW9 75G</p>
        <p className="p__openSans">+8801778888888</p>
        <p className="p__openSans">+8801799999999</p>
      </div>
      <div className="app__footer-contactUs2">
        <p>
          <img src={navbarLogo} alt="navbarLogo" />
        </p>
        <p className="p__openSans">
          "The Best Way To FInd Yourself is To Lose Yourself In The Service Of
          Others"
        </p>
        <p>
          <img style={{ width: "50px" }} src={images.spoon} alt="" />
        </p>
        <div className="app__footer_contactUs2-socialIcons">
          <p>
            <TbBrandFacebook color="#fff" fontSize="27" />
          </p>
          <p>
            <TbBrandTwitter color="#fff" fontSize="27" />
          </p>
          <p>
            <TbBrandInstagram color="#fff" fontSize="27" />
          </p>
        </div>
      </div>
      <div className="app__footer_contactUs3">
        <p className="p__cormorant">Working Hours</p>
        <p className="p__openSans">Monday-Friday:</p>
        <p className="p__openSans">08:00 am -12:00 am</p>
        <p className="p__openSans">Saturday-Sunday:</p>
        <p className="p__openSans">07:00 am -11:00 pm</p>
      </div>
    </div>
  </div>
);

export default Footer;
