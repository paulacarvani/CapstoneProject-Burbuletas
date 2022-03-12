import React from 'react'
import '../Navbar.css';
import { Search, ShoppingCart  }from '@mui/icons-material/';
import { Badge } from '@mui/material';

const Navbar = () => {
  return (
    <section className="header">
      <div className='container'>
        <div className='wrapper_Navbar'>
          <div className='logo'>
            <img 
              src="https://i.postimg.cc/sgY6NTJ1/45f92fbd-d7cf-4987-8c42-ec32a0023f6c.jpg"
              alt="Logo burbuletas"
              />
          </div>
          <div>Redes</div>
          <div>
            <span>ES</span>
            <div className='SearchContainer'>
              <Search style={{color:"gray", fontSize:"16"}}/>
              <input className="inputSearch"></input>
            </div>
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