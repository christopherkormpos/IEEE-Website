import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to="/">
            <img src="../images/ieeesb-logo.png" alt="" />
            </Link>
                <span class="navbar-item"><Link to="/">Home</Link></span>
                <span class="navbar-item"><Link to="/about">About Us</Link></span>
                <span class="navbar-item"><Link to="/news">News</Link></span>
                <span class="navbar-item"><Link to="/contests">Contests</Link></span>            
                <span class="navbar-item"><Link to="/council">SB Council</Link></span>
                <span class="navbar-item"><Link to="/joinieee">JOIN IEEE</Link></span>
        </div>
    )
  }


