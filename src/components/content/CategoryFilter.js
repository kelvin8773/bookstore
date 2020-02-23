import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../../helpers/constant';

const CATEGORY_FILTER = ['All', ...CATEGORIES];

const CategoryFilter = ({ handleChange }) => (
  <div id="category-filter">
    <span className="filter-label">Category</span>
    <select
      className="filter-menu"
      onChange={e => handleChange(e.target.value)}
    >
      {
        CATEGORY_FILTER.map(cat => (
          <option key={`filter-${cat}`} value={cat}>
            {cat}
          </option>
        ))
      }
    </select>
  </div>
)

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
