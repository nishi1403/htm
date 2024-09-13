import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Sections from './Components/Sections';
import Contact from './Components/Contact';
import Regular from './Components/Regular';
import Seasonal from './Components/Seasonal';
import Potery from './Components/Potery';
import Artistic from './Components/Artistic';
import Food from './Components/Food';
import Flower from './Components/Flower';


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
      <Route path="/regular" element={<Regular/>}/>
      <Route path="/seasonal" element={<Seasonal/>}/>
      <Route path='/potery' element={<Potery/>}/>
      <Route path='/artistic' element={<Artistic/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/flower' element={<Flower/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App