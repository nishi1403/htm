import React from 'react'
import hero from './Images/hero.jpg'
import h2 from './Images/h2.jpg'
import h3 from './Images/h3.jpg'
import h4 from './Images/h4.jpg'

import '../Style/Hero.css'

const Hero = () => {
  return (
    <>
    <div className='hero'>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={hero} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={h2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={h3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={h4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
    </>
  )
}

export default Hero