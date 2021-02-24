import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const review = people[index];
  const total = people.length;

  const handleNext = next => {
    const newIndex = next ? 1 : -1;
    setIndex(prev => (((prev + newIndex) % total) + total) % total);
  }

  const handleSurprise = () => {
    var newIndex;
    do {
      newIndex = Math.floor(Math.random() * total);
    } while (newIndex === index);
    setIndex(newIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={review.image} alt={review.name} className="person-img" />
        <span className="quote-icon"><FaQuoteRight /></span>
      </div>
      <h4 className="author">{review.name}</h4>
      <p className="job">{review.job}</p>
      <p className="info">{review.text}</p>
      <div>
        <button className="prev-btn" onClick={() => handleNext(false)}><FaChevronLeft /></button>
        <button className="next-btn" onClick={() => handleNext(true)}><FaChevronRight /></button>
      </div>
      <button className="random-btn" onClick={handleSurprise}>surprise me</button>
    </article>
  );
};

export default Review;
