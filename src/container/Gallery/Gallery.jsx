import React from "react";
import { SubHeading } from "../../components";
import images from "../../constants/images";

import "./Gallery.css";

const Gallery = () => (
  <div className="app__gallery-container app__bg section__padding">
    <div className="app__gallery_text-content">
      <SubHeading title="Instagram" />
      <h1 className="headText__cormorant">Photo Gallery</h1>
      <p className="p__openSans">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        mollitia nihil, accusamus, nam amet rem harum velit cum aut dolores
        reprehenderit libero dicta ratione reiciendis.
      </p>
      <button className="custom__button">View More</button>
    </div>
    <div className="app__gallery-images">
      <p>
        <img src={images.gallery01} alt="" />
      </p>
      <p>
        <img src={images.gallery02} alt="" />
      </p>
      <p>
        <img src={images.gallery03} alt="" />
      </p>
      <p>
        <img src={images.gallery04} alt="" />
      </p>
    </div>
  </div>
);

export default Gallery;
