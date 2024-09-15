import React from 'react'
import About from './About'
import Sections from './Sections'
import Contact from './Contact'
import Header from './Header'
import Carousel from './Carousel'


const Home = () => {
  return (
    <>
    <div id="home">
      <Header/>
    <Carousel/>
    <br/>
  
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