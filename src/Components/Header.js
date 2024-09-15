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
        
        <li className="nav-item">
          <AnchorLink className="nav-link" href="#sections">Section</AnchorLink>
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