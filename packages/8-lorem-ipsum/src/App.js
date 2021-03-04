import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [texts, setTexts] = useState([]);

  const fixValue = value => {
    if (value < 0) return 0;
    if (value > data.length) return data.length;
    return Math.round(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setTexts(data.slice(0, count));
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={({ target }) => setCount(fixValue(target.value))}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </article>
    </section>
  )
}

export default App;
