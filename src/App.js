import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Sections from './Components/Sections';
import Contact from './Components/Contact';


const App = () => {
  return (
    <>

    <BrowserRouter>
    
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sections" element={<Sections/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App