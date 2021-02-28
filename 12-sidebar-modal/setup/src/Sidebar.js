import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {
  return (
    <nav className="sidebar show-sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="coding addict" className="logo" />
        <button className="close-btn"><FaTimes /></button>
      </div>
      <ul className="links">
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>{icon}{text}</a>
          </li>
        ))}
      </ul>
      <ul className="social-icons">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
