import React from 'react'
import h2 from './Images/h2.jpg'
import '../Style/flower.css'
import Flow from "./flower.json";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const Flower = () => {
  return (
    <>
  
    <div className="flower">
      
      <h1>FLOWER</h1>
     
      {Flow.map((flower) => {
          return (
            <>
              <div class="side-content-card">
                <img
                  src={flower.image}
                  alt="Side Card Image"
                  class="side-card-img"
                />
                <div class="side-card-content">
                  <h3>{flower.title}</h3>
                  <p>
                    {flower.address}
                    <br />
                    {flower.Contact}<br/>
                    {flower.Area}
                  </p>
                 
                  <Link to={flower.Redirect}>
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

export default Flower









