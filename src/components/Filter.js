import React from 'react';

const Filter = ({onFilterChange}) => {
	return(
			<div className='filter-buttons'>
				<button onClick={() => onFilterChange('all')}>Tous</button>
				<button onClick={() => onFilterChange('fruit')}>Fruits</button>
				<button onClick={() => onFilterChange('legume')}>Legumes</button>
				<button onClick={() => onFilterChange('boisson')}>Boissons</button>
			</div>
		);
}

export default Filter;