import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{
        sublinks
    }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)

export default AppProvider
