import React from 'react';

const ItemList = ({ items, filter}) => {
	const filteredItems = 
		filter === 'all'
		? items
		: items.filter((item) => item.category === filter);
		return(
				<div className='item-list'>
					{
						filteredItems.map((item) => (
							<div key={item.id} className={`item ${item.category}`}>
								{item.name}
							</div>
							))
					}
				</div>
			);
}

export default ItemList;