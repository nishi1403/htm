import React from 'react'
import About from './About'
import Sections from './Sections'
import Contact from './Contact'
import Hero from './Hero'


const Home = () => {
  return (
    <>
    <div id="home">
    <Hero/>
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