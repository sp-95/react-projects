import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false)
    const [subLink, setSubLink] = useState(null)
    const [center, setCenter] = useState(0)

    const handleSidebarOpen = () => setShowSidebar(true)
    const handleSidebarClose = () => setShowSidebar(false)

    const handleSubMenuOpen = (index, center) => {
        setSubLink(sublinks[index])
        setCenter(center)
    }

    const handleSubMenuClose = () => {
        setSubLink(null)
        setCenter(0)
    }

    return <AppContext.Provider value={{
        showSidebar, handleSidebarOpen, handleSidebarClose,
        subLink, handleSubMenuOpen, handleSubMenuClose,
        center
    }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)

export default AppProvider
