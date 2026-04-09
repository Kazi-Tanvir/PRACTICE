import React, { useState, useEffect, use } from 'react'
import './Navbar.css'

const Navbar = ({ color }) => {
    return (

        useEffect(() => {
            alert('Navbar mounted')
            return () => {
                alert('Navbar unmounted')
            }
        }, []),

        useEffect(() => {
            alert('Navbar will render everytime ')
        }),

        useEffect(() => {
            alert('Navbar will render only when color changes ')
        }, [color]),


        <div className="navbar">
            I am the Navbar {color}
        </div>
    )
}

export default Navbar
