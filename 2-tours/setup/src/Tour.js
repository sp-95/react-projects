import React, { useState } from 'react';

const Tour = ({ tour, handleDelete }) => {
  const { id, name, info, image, price } = tour;
  const [showLess, setShowLess] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {showLess ? `${info.substring(0, 200)}...` : info}
          <button onClick={() => setShowLess(!showLess)}>
            {showLess ? "read more" : "show less"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => handleDelete(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
