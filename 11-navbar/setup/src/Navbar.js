import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="coding addict" className="logo" />
          <div className="nav-toggle"><FaBars /></div>
        </div>
        <ul className="links">
          {links.map(({ id, url, text }) => (
            <li key={id}><a href={url}>{text}</a></li>
          ))}
        </ul>
        <ul className="social-icons">
          {social.map(({ id, url, icon }) => (
            <li key={id}><a href={url}>{icon}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
