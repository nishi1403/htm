import React from "react";
import slider1 from "./Images/slider1.jpg";
import slider2 from "./Images/slider2.jpg";
import pottery from "./Images/pottery.JPG";
import "../Style/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="First Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>A Touch of Earthy Splendour for Your Home</h5>
              <p>Handmade pottery and crafts from local artisans.</p>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="Second Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Artisan Ceramics</h5>
              <p>Elegant and unique pieces for your living space.</p>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <img src={pottery} className="d-block w-100" alt="Third Slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Crafted with Love</h5>
              <p>Explore our collection of handcrafted pottery.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
