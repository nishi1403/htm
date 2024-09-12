import React from "react";
import '../Style/Section.css'
import h2 from "./Images/h2.jpg";
import { Link } from "react-router-dom";

const Sections = () => {
  return (
    <>
      <div id="sections" className="sec">
        <h1>CATEGORIES</h1>
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-lg-4">
              <div className="img-sec">
                <Link to='/artistic'>
                  <img src={h2} />
                </Link>
                <h3>ARTISTIC</h3>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="img-sec">
                <Link to='/potery'>
                  <img src={h2} />
                </Link>
                <h3>POTERY</h3>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-4">
              <div className="img-sec">
                <Link to='/regular'>
                  <img src={h2} />
                </Link>
                <h3>REGULAR</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-12 col-lg-6">
              <div className="img-sec">
                <Link to='/food'>
                  <img src={h2} />
                </Link>
                <h3>TIFFINS AND EATERY</h3>
              </div>
            </div>
            <div className="col col-sm-12 col-lg-6">
              <div className="img-sec">
                <Link to='/seasonal'>
                  <img src={h2} />
                </Link>
                <h3>SEASONAL SHOPS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
