import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from './context'

const Navbar = () => {
  const { sublinks } = useAppContext()
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" />
          <button className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map(({ page }, index) => (
            <li key={index}>
              <button className="link-btn">{page}</button>
            </li>
          ))}
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
