import React, { useState, useContext, useEffect } from "react"
import { useCallback } from "react"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [cocktails, setCocktails] = useState([])
  const [searchTerm, setSearchTerm] = useState("a")

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url + searchTerm)
      const { drinks } = await response.json()
      if (drinks) {
        setCocktails(
          drinks.map(
            ({ idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass }) => ({
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            })
          )
        )
      } else {
        setCocktails([])
      }
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }, [searchTerm])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
