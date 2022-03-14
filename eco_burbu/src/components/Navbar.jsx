import React from 'react'
import '../Navbar.css';
import { ShoppingCart  }from '@mui/icons-material/';
import { Badge } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material/';

const Navbar = () => {
  return (
    <section className="header">
      <div className='container'>
        <div className='wrapper_Navbar'>
          <div className="SocialContainer">
            <div className="SocialIcon">
              <Facebook fontSize="large" />
            </div>
            <div className="SocialIcon">
              <Instagram fontSize="large"/>
            </div>
            <div className="SocialIcon">
              <WhatsApp fontSize="large"/>
            </div>
          </div>
          <div className='logo'>
            <img 
              src="https://i.ibb.co/zmSngjH/Untitled-design-11.png"
              alt="Logo burbuletas"
              />
          </div>
          <div>


            
            <div className="MenuItem">
              <div className="MenuItem">REGISTER</div>
              <div className="MenuItem">SIGN IN</div>
              <Badge badgeContent={4} color="primary">
                <ShoppingCart />
              </Badge> 
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Navbar
