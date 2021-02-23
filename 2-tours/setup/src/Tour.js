import React, { useState } from 'react';

const Tour = ({ tour, handleDelete }) => {
  const { name, info, image, price } = tour;
  const [showLess, setShowLess] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {showLess ?
          (
            <p>
              {info.substring(0, 200) + '...'}
              <button onClick={() => setShowLess(false)}>read more</button>
            </p>
          ) : (
            <p>
              {info}
              <button onClick={() => setShowLess(true)}>show less</button>
            </p>
          )
        }
        <button className="delete-btn" onClick={handleDelete}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
