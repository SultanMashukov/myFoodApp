import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersItem from './OrdersItem/OrdersItem';
import { setCurrentDetailId, toggleModal } from 'store/slices/sliceOrders';
import './OrdersList.scss';

const OrdersList = () => {
	const dispatch = useDispatch();
	const ordersList = useSelector(state => state.orders.ordersList);

	const openOrderInfo = (orderid) => {
		dispatch(setCurrentDetailId({currentDetailId:orderid}));
		dispatch(toggleModal())
	}

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
					openOrderInfo={openOrderInfo}/>
				})
			}
		</div>
	) 
};

export default OrdersList;
