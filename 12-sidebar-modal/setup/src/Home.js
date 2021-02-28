import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  return <section>
    <button className="sidebar-toggle">
      <FaBars />
    </button>
    <button className="btn">
      show modal
    </button>
  </section>
}

export default Home
