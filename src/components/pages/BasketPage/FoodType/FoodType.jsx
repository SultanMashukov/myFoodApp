import React from 'react';
import BasketItem from './BasketItem/BasketItem';
import './FoodType.scss';

const FoodType = ({foodType, items, removeItem, restoreItem}) => {
	
	return (
		<div className="basket__type">
				<div className="basket__type-name">
					{foodType.name}
				</div>
				{
					!items.length 
						? 
						<div className="basket__type-placeholder">
							{foodType.placeholder}
						</div>
						:
						<div className="basket__row">
							{items.map((item,index) => <BasketItem key={index} 
							itemData={item} 
							removeItem={removeItem} 
							restoreItem={restoreItem}
							/>)}
						</div>
				}
				
			</div>
	) 
};

export default FoodType;
