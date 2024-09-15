import React from 'react'
import h2 from './Images/h2.jpg'
import '../Style/food.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import food from "./tiffin.json";


const Food = () => {
  return (
    <>
   
    <div className="food">
      
      <h1>Food</h1>
      {food.map((tiffin) => {
          return (
            <>
              <div class="side-content-card">
                <img
                  src={tiffin.image}
                  alt="Side Card Image"
                  class="side-card-img"
                />
                <div class="side-card-content">
                  <h3>{tiffin.title}</h3>
                  <p>
                    {tiffin.address}
                    <br />
                    {tiffin.Area}
                  </p>
                  <br />
                  <br />
                  <Link to={tiffin.Redirect}>
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

export default Food





