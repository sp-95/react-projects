import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])

  const fetchItems = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCart(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => fetchItems(), [])

  const handleRemoveItem = id => setCart(
    prev => prev.filter(item => item.id !== id)
  )

  const handleClearCart = () => setCart([])

  const calculateTotal = () => (
    cart.reduce(
      (partialSum, item) => partialSum + item.price * item.amount
      , 0
    ).toFixed(2)
  )

  const handleIncrease = id => (
    setCart(
      prev => prev.map(
        item => item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    )
  )

  const handleDecrease = id => (
    setCart(
      prev => prev.map(
        item => item.id === id ? { ...item, amount: item.amount - 1 } : item
      ).filter(
        item => item.amount !== 0
      )
    )
  )

  return (
    <AppContext.Provider
      value={{
        loading,
        cart,
        handleRemoveItem,
        handleClearCart,
        calculateTotal,
        handleIncrease, handleDecrease
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
