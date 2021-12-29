import React from 'react';
import '../Filter/Filter.css';
import FilterCategories from './FilterCategories';
import FilterForms from './FilterForms';

const FilterContainer = () => {
    return (
        <div className='filterContainer'>
            <FilterCategories />
            <FilterForms />
        </div>
    )
}

export default FilterContainer
