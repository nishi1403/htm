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
    <About/>
    <Sections/>
    <Contact/>
    </div>
    </>
  )
}

export default Home