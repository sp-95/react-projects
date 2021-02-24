import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const categories = ["all", ...new Set(items.map(item => item.category))];
  const [category, setCategory] = useState("all");

  const handleFilter = ({target}) => setCategory(target.textContent);

  return (
    <main>
      <div className="menu">
        <header className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </header>
        <Categories categories={categories} handleFilter={handleFilter} />
        <section className="section-center">
          {items
            .filter(item => category === "all" ? true : item.category === category)
            .map(item => <Menu key={item.id} {...item} />)
          }
        </section>
      </div>
    </main>
  );
}

export default App;
