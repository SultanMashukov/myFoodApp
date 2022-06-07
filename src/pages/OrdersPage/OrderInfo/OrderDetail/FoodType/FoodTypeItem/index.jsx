import React from 'react';

const FoodTypeItem = ({itemData}) => {
	
	return(	
		<div className="ordersDetail__item">
			<div className="ordersDetail__item-pic">
				<img  className="ordersDetail__item-img" src={itemData.image} alt={itemData.name}/>
			</div>
			<div className="ordersDetail__item-info">
				<div className="ordersDetail__item-name">{itemData.name}</div>
				<div className="ordersDetail__item-options">
					{
						itemData.options.length 
						? 
							itemData.options.map((option, index) => {
								return <div className={option.active? 'ordersDetail__item-option' : 'ordersDetail__item-option ordersDetail__item-option--false'} key={index}>
									{option.name}
								</div>
							})
						:
						''
						
					}
				</div>
				<div className="ordersDetail__item-sum">
					{itemData.count}шт X {itemData.price} = {itemData.count * itemData.price} <i className="fal fa-ruble-sign"></i>
				</div>
			</div>
			
		</div>

	) 
};

export default FoodTypeItem;