import React from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  const handleSubmit = event => event.preventDefaults()
  const handleChange = ({ target }) => setSearchTerm(target.value)

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
