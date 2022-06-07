import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewOrder } from 'store/slices/sliceOrders';
import { resetBasket } from 'store/slices/sliceBasket';

const BasketControls = (props) => {
	const dispatch = useDispatch()
	const basketItems = useSelector(state => state.basket.basketItems);
	const isNeedDelivery = useSelector(state => state.basket.needDelivery);
	const userAddress = useSelector(state => state.user.address);

	const addToOrders = () => {
		const orderPositions = [];

		basketItems.forEach(element => {
			orderPositions.push({
				productId: element.productId,
				name: element.name,
				count: element.count,
				price: element.price,
				image: element.image,
				options: element.options,
				type: element.type
			})
		});

		dispatch(addNewOrder({
			address: isNeedDelivery ? userAddress : '',
			positions:orderPositions
		}));

		dispatch(resetBasket())
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
					<button className="basket__order-btn" onClick={addToOrders}>
						Заказать
					</button>
				</div>
				:''
			}
		</>
	) 
};

export default BasketControls;
