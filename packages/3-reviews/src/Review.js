import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const total = people.length;

  const fixIndex = index => ((index % total) + total) % total;
  const handlePrev = () => setIndex(prev => fixIndex(prev - 1));
  const handleNext = () => setIndex(prev => fixIndex(prev + 1));

  const handleRandom = () => {
    let newIndex = Math.floor(Math.random() * total);
    newIndex = newIndex === index ? fixIndex(newIndex + 1) : newIndex;
    setIndex(newIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>surprise me</button>
    </article>
  );
};

export default Review;
