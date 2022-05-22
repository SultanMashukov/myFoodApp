import React from 'react';
import BasketItem from './BasketItem/BasketItem';
import './FoodType.scss';

const FoodType = ({foodType, items, removeItem, restoreItem, toggleItemChangerModal}) => {
	
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
							{items.map((item) => <BasketItem key={item.basketId} 
							itemData={item} 
							removeItem={removeItem} 
							restoreItem={restoreItem}
							toggleItemChangerModal={toggleItemChangerModal}
							/>)}
						</div>
				}
				
			</div>
	) 
};

export default FoodType;
