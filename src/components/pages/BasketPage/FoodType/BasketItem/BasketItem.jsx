import React from 'react';
import { useEffect } from 'react';
import './BasketItem.scss';

const BasketItem = ({itemData, removeItem, restoreItem, idForArr}) => {
	useEffect(()=>{},[removeItem,restoreItem,itemData]);
	

	if(itemData.removeMark)
		return(
			<div className="basket__removed-item">
                <div className="basket__removed-notification">
					<b>{itemData.name}</b> был удален.<button className="basket__restore-btn" onClick={() => {restoreItem(idForArr)}}>Вернуть?</button>
				</div>
            </div>
		)
	
	
	return (
		<div className="basket__item">
			<div className="basket__item-pic">
				<img  className="basket__item-img" src={itemData.image} alt={itemData.name}/>
			</div>
			<div className="basket__item-info">
				<div className="basket__item-name">{itemData.name}</div>
				<div className="basket__item-options">
					{
						itemData.options.length 
						? 
							itemData.options.map((option, index) => {
								return <div className={option.active? 'basket__item-option' : 'basket__item-option basket__item-option--false'} key={index}>
									{option.name}
								</div>
							})
							
						:
							''
						
					}
				</div>
				<div className="basket__item-sum">
					{itemData.count}шт X {itemData.price} = {itemData.count * itemData.price} <i className="fal fa-ruble-sign"></i>
				</div>
			</div>
			<button className="basket__item-delete" onClick={() => {removeItem(idForArr)}}><i className="fal fa-times"></i></button>
		</div>
		
	) 
};

export default BasketItem;
