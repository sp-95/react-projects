import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from './context'

const Navbar = () => {
  const { sublinks, setShowSidebar, openSubMenu, closeSubMenu } = useAppContext()

  const handleMouseEnter = (index, {target}) => {
    const bbox = target.getBoundingClientRect()
    const center = (bbox.left + bbox.right) / 2
    openSubMenu(sublinks[index], center)
  }

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" />
          <button className="btn toggle-btn">
            <FaBars onClick={() => setShowSidebar(true)} />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map(({ page }, index) => (
            <li key={index}>
              <button
                className="link-btn"
                onMouseEnter={event => handleMouseEnter(index, event)}
                onMouseLeave={closeSubMenu}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
