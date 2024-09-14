import React from "react";
import "../Style/Section.css";
import h2 from "./Images/h2.jpg";
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <>
      <div id="sections" className="sec">
        <h1>CATEGORIES</h1>
        <div className="container">
          <div className="row">
            <div className="col col-sm-12  col-xl-4">
            <div className="vendor-card">
                <Link to="/food">
                  <div className="image-container">
                    <img src={h2} alt="Tiffin Services" />
                    <div className="overlay-text">From Our Kitchen to Your Heart – Meals with a Mission.</div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Tiffin Services</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="col col-sm-12  col-xl-4">

            <div className="vendor-card">
                <Link to="/seasonal">
                  <div className="image-container">
                    <img src={h2} alt="Seasonal" />
                    <div className="overlay-text">Seasonal Treasures for a Limited Time – Don’t Miss Out!</div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Seasonal</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="col col-sm-12  col-xl-4">
              <div className="vendor-card">
                <Link to="/regular">
                  <div className="image-container">
                    <img src={h2} alt="Regular" />
                    <div className="overlay-text">Your Daily Needs, Right Around the Corner.</div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Regular</p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div className="row">
            <div className="col col-sm-12  col-xl-4">
            <div className="vendor-card">
                <Link to="/potery">
                  <div className="image-container">
                    <img src={h2} alt="Potery" />
                    <div className="overlay-text">From Earth to Art – Pottery that Tells a Story</div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Potery</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="col col-sm-12  col-xl-4">
            <div className="vendor-card">
                <Link to="/flower">
                  <div className="image-container">
                    <img src={h2} alt="flower" />
                    <div className="overlay-text">Flowers that Speak, Art that Sings – Beauty in Every Petal and Stroke</div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Flower</p>
                </div>
              </div>
              
            </div>
            <br />
            <br />
            <div className="col col-sm-12  col-xl-4">
            <div className="vendor-card">
                <Link to="/artistic">
                  <div className="image-container">
                    <img src={h2} alt="Artistic" />
                    <div className="overlay-text">Bringing Beauty to Life – Art and Blooms that Inspire.</div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Artistic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
