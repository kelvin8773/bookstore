import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../helpers/index';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { handleChange } = this.props;
    handleChange(e.target.value);
  }

  render() {
    const CATEGORY_FILTER = ['All', ...CATEGORIES];
    return (
      <div id="category-filter">
        <span className="filter-label">Category</span>
        <select
          className="filter-menu"
          onChange={this.handleChange}
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
    );
  }
}

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
