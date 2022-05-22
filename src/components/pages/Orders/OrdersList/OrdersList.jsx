import React from 'react';
import { useSelector } from 'react-redux';
import OrdersItem from './OrdersItem/OrdersItem';
import './OrdersList.scss';

const OrdersList = ({toggleDetailOrder}) => {
	
	const ordersList = useSelector(state => state.orders);

	return (
		<div className="orders__row">
			
			{
				ordersList.map((order) => {
					const namedOrder = {
						...order,
						name: order.positions.reduce((prevVal,nextEl) => prevVal+`${nextEl.name} x${nextEl.count}, `, ''),
					}
					
					return <OrdersItem 
					key={namedOrder.id} orderData={namedOrder}
					toggleDetailOrder={toggleDetailOrder}/>
				})
			}
		</div>
	) 
};

export default OrdersList;
