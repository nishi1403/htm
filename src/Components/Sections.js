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
                  <img src={h2} alt="Tiffin Services" />
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
                  <img src={h2} alt="Tiffin Services" />
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
                  <img src={h2} alt="Tiffin Services" />
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
                  <img src={h2} alt="Tiffin Services" />
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
                  <img src={h2} alt="Tiffin Services" />
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
                  <img src={h2} alt="Tiffin Services" />
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
