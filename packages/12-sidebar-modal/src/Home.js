import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useAppContext } from './context'

const Home = () => {
  const { openSidebar, openModal } = useAppContext()

return <section>
    <button className="sidebar-toggle" onClick={openSidebar}>
      <FaBars />
    </button>
    <button className="btn" onClick={openModal}>
      show modal
    </button>
  </section>
}

export default Home
