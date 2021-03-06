import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [subLink, setSubLink] = useState(null)
    const [center, setCenter] = useState(0)

    const openSubMenu = (link, center) => {
        setSubLink(link)
        setCenter(center)
    }

    const closeSubMenu = () => {
        setSubLink(null)
        setCenter(0)
    }

    return <AppContext.Provider value={{
        sublinks,
        showSidebar, setShowSidebar,
        subLink, setSubLink,
        center, setCenter,
        openSubMenu, closeSubMenu
    }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)

export default AppProvider
