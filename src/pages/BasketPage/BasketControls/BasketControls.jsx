import React from 'react';
import { useSelector } from 'react-redux';

const BasketControls = (props) => {
	const basketItems = useSelector(state => state.basket.basketItems)
	return (
		<>
			{
				basketItems.length 
				?
				<div className="basket__controls">
					<div className="basket__price">
						<div className="basket__price-value">
							Стоимость всего: { 
								basketItems.reduce((prev,cur) =>  !cur.removeMark ? (prev + cur.price * cur.count) : prev , 0)
							} 
							<i className="fal fa-ruble-sign"></i>
						</div>
						
					</div>
					<button className="basket__order-btn">
						Заказать
					</button>
				</div>
				:''
			}
		</>
	) 
};

export default BasketControls;
