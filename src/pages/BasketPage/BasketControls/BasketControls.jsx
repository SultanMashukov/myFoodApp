import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder } from 'store/slices/sliceOrders';

const BasketControls = (props) => {
	const dispatch = useDispatch()
	const basketItems = useSelector(state => state.basket.basketItems)

	const addToOrders = () => {
		dispatch(addNewOrder())
	}

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
