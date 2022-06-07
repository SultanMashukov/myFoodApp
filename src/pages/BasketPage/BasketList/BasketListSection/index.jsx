import React from 'react';
import { NavLink } from 'react-router-dom';
import BasketItem from './BasketItem';

const BasketListSection = ({foodType, catalogLink,  items, removeItem, restoreItem, openChanger}) => {
	
	return (
		<div className="basket__type">
				<div className="basket__type-name">
					{foodType.name}
				</div>
				{
					!items.length 
						? 
						<NavLink className="basket__type-placeholder" to={catalogLink}>
							{foodType.placeholder}
						</NavLink>
						:
						<div className="basket__row">
							{items.map((item) => <BasketItem key={item.basketId} 
							itemData={item} 
							removeItem={removeItem} 
							restoreItem={restoreItem}
							openChanger={openChanger}
							/>)}
						</div>
				}
				
			</div>
	) 
};

export default BasketListSection;
