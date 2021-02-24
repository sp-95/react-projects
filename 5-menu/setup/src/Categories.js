import React from 'react';

const Categories = ({ categories, handleClick }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) =>
        <button key={index} className="filter-btn" onClick={handleClick}>
          {category}
        </button>
      )}
    </div>
  );
};

export default Categories;
