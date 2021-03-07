import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)

  const handleRemoveItem = id => setCart(
    prev => prev.filter(item => item.id !== id)
  )

  const handleClearCart = () => setCart([])

  return (
    <AppContext.Provider
      value={{
        cart,
        handleRemoveItem,
        handleClearCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
