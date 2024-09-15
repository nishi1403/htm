import React from 'react'
import h2 from './Images/h2.jpg'
import '../Style/reg.css'
import Regu from "./regu.json";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Regular = () => {
  return (
    <>
   
    <div className="regular">
      
      <h1>Regular</h1>
      {Regu.map((regu) => {
          return (
            <>
              <div class="side-content-card">
                <img
                  src={regu.image}
                  alt="Side Card Image"
                  class="side-card-img"
                />
                <div class="side-card-content">
                  <h3>{regu.title}</h3>
                  <p>
                    {regu.address}
                    <br />
                    {regu.Contact}<br/>
                    {regu.Area}
                  </p>
                 
                  <Link to={regu.Redirect}>
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
  )
}

export default Regular





  









