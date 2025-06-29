import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflix_logo.png'
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV- Shows</li>
                <li>Moives</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <FaSearch className='search_Icon' />
            <p>children</p>
            <FaBell />
            <div className='navbar-profile'>
             <CgProfile />
            <div className='dropdown'>
              <p>Sign out of Netflix</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar