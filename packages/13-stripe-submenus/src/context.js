import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false)

    return <AppContext.Provider value={{
        sublinks,
        showSidebar, setShowSidebar
    }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)

export default AppProvider
