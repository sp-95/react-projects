import React from 'react';

const Categories = ({ category, handleClick }) => {
  return (
    <button className="filter-btn" onClick={handleClick}>
      {category}
    </button>
  );
};

export default Categories;
