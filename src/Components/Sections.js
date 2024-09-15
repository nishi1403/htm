import React from "react";
import tiffin from "./Images/tiffin.jpg"
import sesonal from "./Images/1.jpg"
import regular from "./Images/h2.jpg"
import pottery from "./Images/2.jpg"
import flower from "./Images/flower vendor.jpg"
import artist from "./Images/artistic 5.jpg"

import { Link } from "react-router-dom";
import '../Style/Section.css'

const Sections = () => {
  return (
    <>
      <div id="sections" className="sec">
        <h1>CATEGORIES</h1>
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-xl-4">
              <div className="vendor-card">
                <Link to="/food">
                  <div className="image-container">
                    <img src={tiffin} alt="Tiffin Services" />
                    <div className="overlay-text">
                      From Our Kitchen to Your Heart – Meals with a Mission.
                    </div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Tiffin Services</p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-xl-4">
              <div className="vendor-card">
                <Link to="/seasonal">
                  <div className="image-container">
                    <img src={sesonal} alt="Seasonal" />
                    <div className="overlay-text">
                      Seasonal Treasures for a Limited Time – Don’t Miss Out!
                    </div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Seasonal</p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-xl-4">
              <div className="vendor-card">
                <Link to="/regular">
                  <div className="image-container">
                    <img src={regular} alt="Regular" />
                    <div className="overlay-text">
                      Your Daily Needs, Right Around the Corner.
                    </div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Regular</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-sm-12 col-xl-4">
              <div className="vendor-card">
                <Link to="/potery">
                  <div className="image-container">
                    <img src={pottery} alt="Potery" />
                    <div className="overlay-text">
                      From Earth to Art – Pottery that Tells a Story
                    </div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Potery</p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-xl-4">
              <div className="vendor-card">
                <Link to="/flower">
                  <div className="image-container">
                    <img src={flower} alt="Flower" />
                    <div className="overlay-text">
                      Flowers that Speak, Art that Sings – Beauty in Every Petal
                      and Stroke
                    </div>
                  </div>
                </Link>
                <div className="vendor-info">
                  <p>Flower</p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-xl-4">
              <div className="vendor-card">
                <Link to="/artistic">
                  <div className="image-container">
                    <img src={artist} alt="Artistic" />
                    <div className="overlay-text">
                      Bringing Beauty to Life – Art and Blooms that Inspire.
                    </div>
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

      {/* Inline style block */}
      <style jsx>{`
        .sec {
          padding: 60px 0;
          background-color: #f0f0f0; /* Light shade grey background */
        }

        h1 {
          font-size: 3rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
          color: #333;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          position: relative;
          transition: color 0.4s ease;
        }

        h1:hover {
          color: #ff6347;
        }

        h1::after {
          content: "";
          display: block;
          margin: 0.5rem auto;
          width: 100px;
          height: 3px;
          background-color: #ff7f50;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .col {
          flex: 1 1 300px;
          max-width: 100%;
        }

        .vendor-card {
          background-color: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;
          transform: scale(1);
        }

        .vendor-card:hover {
          transform: scale(1.07);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          background-color: #ffefeb;
        }

        .image-container {
          position: relative;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.5s ease, filter 0.5s ease;
        }

        .image-container:hover img {
          transform: scale(1.2);
          filter: brightness(90%);
        }

        .overlay-text {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          padding: 10px 15px;
          font-size: 1.2rem;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .image-container:hover .overlay-text {
          opacity: 1;
          transform: translateY(0);
        }

        .vendor-info {
          padding: 20px;
          text-align: center;
        }

        .vendor-info p {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin: 0;
          transition: color 0.3s ease;
        }

        .vendor-info p:hover {
          color: #ff6347;
        }

        @media (max-width: 1200px) {
          .col {
            max-width: 45%;
          }
        }

        @media (max-width: 768px) {
          .col {
            max-width: 100%;
          }

          .image-container img {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Sections;