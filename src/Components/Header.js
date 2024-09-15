import React from 'react'
import { Link } from 'react-router-dom';
import hand from './Images/hand.png'
import '../Style/Header.css'
import { useAuth0 } from '@auth0/auth0-react';
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  const { loginWithRedirect , logout , isAuthenticated } = useAuth0();
  return (
    <>
    <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid all-tab ">
      <img src={hand}  className='logo'/><b>GoLocalGrow</b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse tab " id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <AnchorLink className="nav-link active" aria-current="page" href="#home">Home</AnchorLink>
        </li>
        
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#sections" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Section
          </a>
          <ul class="dropdown-menu ">
            <li><Link class="dropdown-item" to='/food'>Tiffin services</Link></li>
            <li><Link class="dropdown-item" to='/seasonal'>Seasonal</Link></li>
            <li><Link class="dropdown-item" to='/regular'>Regular</Link></li>
            <li><Link class="dropdown-item" to='/potery'>Potery</Link></li>
            <li><Link class="dropdown-item" to='/flower'>Flower</Link></li>
            <li><Link class="dropdown-item" to='/artistic'>Artistic</Link></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#about">About</AnchorLink>
        </li>

        <li className="nav-item">
          <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>
        </li>
        {
          isAuthenticated ? <li className="nav-item">

          <button onClick={() => logout({returnTo: window.location.origin })}>LogOut</button>
          </li>
          :
          <li className="nav-item">
        <button onClick={() => loginWithRedirect()}>LogIn</button>
        </li>
        }
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header