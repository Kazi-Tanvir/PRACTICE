import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/"  className={(e) => {return e.isActive?"red":""}} >Home</NavLink>
            <NavLink to="/about" className={(e) => {return e.isActive?"red":""}}>About</NavLink>
            <NavLink to="/login" className={(e) => {return e.isActive?"red":""}}>Login</NavLink>
        </nav>
    )
}

export default Navbar
