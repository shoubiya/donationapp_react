import React from 'react';
import "./DonationNavbar.css";
import {VolunteerActivism} from '@mui/icons-material';
export default function DonationNavbar() {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style.css" />
        <title>Document</title>
        <nav className="navbar">
        <div className="logo">Charitee <VolunteerActivism/></div>
          <ul className="nav-links">
       <div className="menu">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About Us</a></li>
              <li className="services">
            <a href="/">Programs</a> </li>
          <li><a href="/Login">Login</a></li>
         <li><a href="/Register">Register</a></li>
         <li><a href="/Contact">Contact us</a></li>
   
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )
}
