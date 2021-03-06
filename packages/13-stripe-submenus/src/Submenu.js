import React, { useRef, useEffect } from 'react'
import { useAppContext } from './context'

const Submenu = () => {
  const { subLink, center } = useAppContext()
  const subMenu = useRef(null)

  useEffect(() => {
    if (subLink) subMenu.current.style.left = `${center}px`
  }, [subLink, center])

  if (subLink) {
    return (
      <div className="submenu show" ref={subMenu}>
        <section>
          <h4>{subLink.page}</h4>
          <div className={`submenu-center col-${subLink.links.length}`}>
            {subLink.links.map(({ label, icon, url }, index) => (
              <a href={url} key={index}>{icon}{label}</a>
            ))}
          </div>
        </section>
      </div>
    )
  } else {
    return (
      <div className="submenu"></div>
    )
  }
}

export default Submenu
