import React from 'react'
import h2 from './Images/h2.jpg'
import '../Style/pot.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import pottery from "./pot.json";


const Potery = () => {
  return (
      <>
      
      <div className="pot">
        
        <h1>POTERY</h1>
        
        {pottery.map((pot) => {
          return (
            <>
              <div class="side-content-card">
                <img
                  src={pot.image}
                  alt="Side Card Image"
                  class="side-card-img"
                />
                <div class="side-card-content">
                  <h3>{pot.title}</h3>
                  <p>
                    {pot.address}
                    <br />
                    {pot.Area}
                  </p>
                  <br />
                  <br />
                  <Link to={pot.Redirect}>
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

export default Potery


      