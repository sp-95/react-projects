import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setColorList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <main>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="color"></label>
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={({ target }) => {
              setColor(target.value);
              setError(false);
            }}
            className={error ? "error" : ""}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {colorList.map((color, index) => <SingleColor key={index} {...color} />)}
      </section>
    </main>
  )
}

export default App
