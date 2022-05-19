import React from 'react';
import OrdersItem from './OrdersItem/OrdersItem';
import './OrdersList.scss';

const OrdersList = ({ordersList}) => {
	return (
		<div className="orders__row">
			
			{
				ordersList.map((order) => {
					const namedOrder = {
						...order,
						name: order.positions.reduce((prevVal,nextEl) => prevVal+`${nextEl.name} x${nextEl.count}, `, ''),
					}
					
					return <OrdersItem key={namedOrder.id} orderData={namedOrder}/>
				})
			}
		</div>
	) 
};

export default OrdersList;
