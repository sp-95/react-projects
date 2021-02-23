import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, handleDelete }) => {
  return (
    <section>
      <div className="title">
        <h2>
          {tours.length > 0 ? "Our Tours" : "No Tours Left"}
        </h2>
        <div className="underline"></div>
        {!tours.length && <button className="btn" onClick={() => window.location.reload()}>refresh</button>}
      </div>
      {tours && <div>{tours.map(tour => <Tour tour={tour} handleDelete={() => handleDelete(tour.id)} key={tour.id} />)}</div>}
    </section>
  )
};

export default Tours;
