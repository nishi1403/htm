import React from "react";
import h2 from "./Images/h2.jpg";
import "../Style/art.css";

import Art from "./art.json";
import "../Style/seasonal.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Artistic = () => {
  return (
    <>
      <div className="art">
        
        <h1>ARTISTIC</h1>
        {Art.map((art) => {
          return (
            <>
              <div class="side-content-card">
                <img
                  src={art.image}
                  alt="Side Card Image"
                  class="side-card-img"
                />
                <div class="side-card-content">
                  <h3>{art.title}</h3>
                  <p>
                    {art.address}
                    <br />
                    {art.Area}
                  </p>
                  <br />
                  <br />
                  <Link to={art.Redirect}>
                    <Button>Products</Button>
                  </Link>
                </div>
              </div>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Artistic;
