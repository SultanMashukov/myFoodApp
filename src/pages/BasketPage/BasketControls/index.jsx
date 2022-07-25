import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from 'store/slices/sliceOrders';
import { resetBasket } from 'store/slices/sliceBasket';
import { useNavigate } from 'react-router-dom';

const BasketControls = (props) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const basketItems = useSelector(state => state.basket.basketItems);
	const isNeedDelivery = useSelector(state => state.basket.needDelivery);
	const userAddress = useSelector(state => state.user.address);
	const userIsAuth = useSelector(state => state.user.isAuth)

	const addToOrders = () => {
		if(!userIsAuth){
			navigate('/signin?from=basket')
			return;
		}
			
		const orderPositions = [];

		basketItems.forEach(element => {
			if(!element.removeMark)
				orderPositions.push({
					catalogId: element.productId,
					count: element.count,
					options: element.options,
				})
		});

		if(orderPositions.length){
			dispatch(addOrder({
				address: isNeedDelivery ? userAddress : 'В ресторане',
				positions:orderPositions
			}));
	
			dispatch(resetBasket())
		}
		
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
