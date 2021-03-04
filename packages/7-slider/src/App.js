import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = data.length;
  const fixIndex = index => ((index % total) + total) % total;
  const handlePrev = () => setActiveIndex(prev => fixIndex(prev - 1));
  const handleNext = () => setActiveIndex(prev => fixIndex(prev + 1));
  useEffect(() => {
    const intervalID = setInterval(handleNext, 5000);
    return () => { clearInterval(intervalID) };
  });

  const slidePreviews = {
    lastSlide: fixIndex(activeIndex - 1),
    activeSlide: activeIndex,
    nextSlide: fixIndex(activeIndex + 1)
  };
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {
          Object.entries(slidePreviews).map(([className, index]) => {
            const { id, image, name, title, quote } = data[index];
            return (
              <article key={id} className={className}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            )
          })
        }
        <button className="prev" onClick={handlePrev}><FiChevronLeft /></button>
        <button className="next" onClick={handleNext}><FiChevronRight /></button>
      </div>
    </section>
  );
}

export default App;
