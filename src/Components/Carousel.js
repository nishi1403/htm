import React, { useEffect } from "react";
import "../Style/carousel.css"; // Keep your CSS

// Import the images
import img1 from "./Images/slider1.jpg";
import img2 from "./Images/slider2.jpg";
import img3 from "./Images/pottery.JPG";
import img4 from "./Images/2.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
  useEffect(() => {
    const nextDom = document.getElementById("next");
    const prevDom = document.getElementById("prev");
    const carouselDom = document.querySelector(".carousel");
    const SliderDom = carouselDom.querySelector(".list");
    const thumbnailBorderDom = document.querySelector(".thumbnail");
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll(".list .item");
      const thumbnailItemsDom = document.querySelectorAll(".thumbnail .item");

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    nextDom.onclick = () => {
      showSlider("next");
    };

    prevDom.onclick = () => {
      showSlider("prev");
    };

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className="carousel">
      {/* List Items */}
      <div className="list">
        <div className="item">
          <img src={img1} alt="Slider 1" />
          <div className="content">
            <div className="author">From</div>
            <div className="title">Streets To</div>
            <div className="topic">Seats</div>
            <div className="des">
              From Streets to Homes, We Deliver Happiness!
            </div>
            <div className="buttons">
              <Link to="/sections">
                <button>SEE MORE</button>
              </Link>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img2} alt="Slider 2" />
          <div className="content">
            <div className="author">From</div>
            <div className="title">Streets To</div>
            <div className="topic">Seats</div>
            <div className="des">
              From Streets to Homes, We Deliver Happiness!
            </div>
            <div className="buttons">
              <Link to="/sections">
                <button>SEE MORE</button>
              </Link>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img3} alt="Slider 3" />
          <div className="content">
            <div className="author">From</div>
            <div className="title">Streets To</div>
            <div className="topic">Seats</div>
            <div className="des">
              From Streets to Homes, We Deliver Happiness!
            </div>
            <div className="buttons">
              <Link to="/sections">
                <button>SEE MORE</button>
              </Link>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
        <div className="item">
          <img src={img4} alt="Slider 4" />
          <div className="content">
            <div className="author">From</div>
            <div className="title">Streets To</div>
            <div className="topic">Seats</div>
            <div className="des">
              From Streets to Homes, We Deliver Happiness!
            </div>
            <div className="buttons">
              <Link to="/sections">
                <button>SEE MORE</button>
              </Link>
              {/* <button>SUBSCRIBE</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Items */}
      <div className="thumbnail">
        <div className="item">
          <img src={img1} alt="Thumbnail 1" />
        </div>
        <div className="item">
          <img src={img2} alt="Thumbnail 2" />
        </div>
        <div className="item">
          <img src={img3} alt="Thumbnail 3" />
        </div>
        <div className="item">
          <img src={img4} alt="Thumbnail 4" />
        </div>
      </div>

      {/* Next/Prev Buttons */}
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>

      {/* Time Indicator */}
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
