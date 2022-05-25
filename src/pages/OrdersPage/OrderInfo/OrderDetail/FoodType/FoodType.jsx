import React from 'react';
import FoodTypeItem from './FoodTypeItem/FoodTypeItem';
import './FoodType.scss';

const FoodType = ({foodType, items, removeItem, restoreItem, toggleItemChangerModal}) => {
	
	return (
		<div className="ordersDetail__type">
				
				{
					!items.length 
						? 
						<></>
						:
						<>
							<div className="ordersDetail__type-name">
								{foodType.name}
							</div>
							<div className="ordersDetail__row">
							{items.map((item) => <FoodTypeItem key={item.name} 
							itemData={item} 
							removeItem={removeItem} 
							restoreItem={restoreItem}
							toggleItemChangerModal={toggleItemChangerModal}
							/>)}
						</div>
						</>
						
				}
				
			</div>
	) 
};

export default FoodType;
