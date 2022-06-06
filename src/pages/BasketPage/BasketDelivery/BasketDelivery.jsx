import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './BasketDelivery.scss';
import { toggleDelivery } from "store/slices/sliceBasket";
import BasketAddressPicker from './BasketAddressPicker/BasketAddressPicker';

const BasketDelivery = (props) => {
	const dispatch = useDispatch();
	const isNeedDelivery = useSelector( state =>  state.basket.needDelivery);
	
	const toggleDeliveryStatus = () => {
		dispatch(toggleDelivery())
	}

	return (
		<div className="basketDelivery">
			<div className="basket__place">
				<div className={!isNeedDelivery ? 'basket__place-item basket__place-item--active': 'basket__place-item'} 
					onClick={toggleDeliveryStatus}>
					В ресторане
				</div>
				<div className={isNeedDelivery ? 'basket__place-item basket__place-item--active': 'basket__place-item'} 
					onClick={toggleDeliveryStatus}>
					Доставка
				</div>
			</div>
			{
				isNeedDelivery && <BasketAddressPicker/>  
			}
		</div>
	) 
};

export default BasketDelivery;
