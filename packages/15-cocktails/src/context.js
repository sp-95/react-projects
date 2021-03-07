import React, { useState, useContext, useEffect } from "react"
import { useCallback } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [drinks, setDrinks] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const { drinks } = await response.json()
      setDrinks(drinks)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => fetchData(), [])

  return (
    <AppContext.Provider value={{ loading, drinks }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
