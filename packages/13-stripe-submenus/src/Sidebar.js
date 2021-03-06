import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from './context'
import sublinks from './data'

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useAppContext()
  return (
    <div className={`sidebar-wrapper${showSidebar ? " show" : ""}`}>
      <aside className="sidebar">
        <button className="close-btn"><FaTimes onClick={() => setShowSidebar(false)} /></button>
        <div>
          {sublinks.map(({ page, links }, index) => (
            <article key={index}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks" key={index}>
                {links.map(({ label, icon, url }, index) => (
                  <a href={url}>{icon}{label}</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
