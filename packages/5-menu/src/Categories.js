import React from 'react';

const Categories = ({ categories, handleFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) =>
        <button key={index} className="filter-btn" onClick={handleFilter}>
          {category}
        </button>
      )}
    </div>
  );
};

export default Categories;
