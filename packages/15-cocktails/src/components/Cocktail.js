import React from "react"
import { Link } from "react-router-dom"

const Cocktail = ({
  idDrink,
  strDrinkThumb,
  strDrink,
  strGlass,
  strAlcoholic,
}) => {
  return (
    <article className="cocktail">
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktail/${idDrink}`} className="btn-primary">
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
