import React from 'react'
import About from './About'
import Sections from './Sections'
import Contact from './Contact'

import Information from './Information'
import Carousel from './Carousel'


const Home = () => {
  return (
    <>
    <div id="home">
    <Carousel/>
    <br/>
    <Information/><br/>
    <Sections/>
    <br/>
    <About/>
    <br/>
    <Contact/>
    <br/>
    </div>
    </>
  )
}

export default Home