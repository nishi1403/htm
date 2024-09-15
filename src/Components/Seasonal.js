import React from "react";
import h2 from "./Images/h2.jpg";
import record from './Records.json'
import "../Style/seasonal.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Seasonal = () => {
  return (
    <>
      <div className="seasonal">
      <h1>SEASONAL</h1>
         
{
        record.map(Records => {
           return(
            <>
            
        <div class="side-content-card">
          <img
            src={Records.image}
            alt="Side Card Image"
            class="side-card-img"
          />
          <div class="side-card-content">
            <h3>{Records.title}</h3>
            <p>
              {Records.address}<br/>
              {Records.Area}
            </p>
            <br/><br/>
            <Link to={Records.Redirect}><Button>Products</Button></Link>
            
          </div>
        </div>
        <br/>
             
        
        
    
            
            </>
           )
        })
      }
      </div>
    </>
  );
};

export default Seasonal;
