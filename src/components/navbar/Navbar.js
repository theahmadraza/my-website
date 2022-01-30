import React from 'react';
import './Navbar.css'
import {Link } from "react-router-dom";


const Navbar = () => {
  return( 
    <div className='navbar'>
        <div className='navbar__logo'>
            <Link to='/' style={{ textDecoration: 'none' , color: 'black' }}><h1>Ahmad</h1></Link>
        </div>
        <div className='navbar__menu'>
            <ul> 
               <li> <Link className='text__link' to='/' style={{ textDecoration: 'none' , color: 'black' }}>Home</Link> </li>
               <li><Link className='text__link' to='/about' style={{ textDecoration: 'none', color: 'black' }} >About</Link></li>
               <li> <Link className='text__link' to='/portfolio' style={{ textDecoration: 'none', color: 'black'}} >Portfolio</Link></li>
               <li> <Link className='text__link' to='/contact'  style={{  textDecoration:'none', color: 'black' }}>Contact</Link></li>
            </ul>
        </div>

    </div>
  );
};

export default Navbar;
