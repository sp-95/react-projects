import React from "react"
import { Link } from "react-router-dom"

const Cocktail = ({ id, name, image, glass, info }) => {
  return (
    <article className="cocktail">
      <img src={image} alt={name} />
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn-primary">
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
