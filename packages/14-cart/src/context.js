import React, { useContext, useReducer, useEffect } from "react"
import reducer from "./reducer"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project"
const AppContext = React.createContext()

const initialState = {
  loading: true,
  cart: [],
  total: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, initialState)

  const fetchItems = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatcher({ type: "LOAD_COMPLETE", payload: data })
    } catch (error) {
      console.log(error)
      dispatcher({ type: "LOAD_COMPLETE" })
    }
  }

  useEffect(() => fetchItems(), [])

  const handleRemoveItem = id =>
    dispatcher({ type: "REMOVE_ITEM", payload: id })

  const handleClearCart = () => dispatcher({ type: "CLEAR_CART" })

  const calculateTotal = () => dispatcher({ type: "CALCULATE_TOTAL" })
  useEffect(calculateTotal, [state.cart])

  const handleIncrease = id => dispatcher({ type: "INCREASE", payload: id })

  const handleDecrease = id => dispatcher({ type: "DECREASE", payload: id })

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleRemoveItem,
        handleClearCart,
        handleIncrease,
        handleDecrease,
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
