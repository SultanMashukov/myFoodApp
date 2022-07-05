import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersItem from './OrdersItem';
import { setCurrentDetailId, toggleModal, fetchOrders, fetchOrderDetails } from 'store/slices/sliceOrders';
import { useEffect } from 'react';

const OrdersList = () => {
	const dispatch = useDispatch();
	const ordersList = useSelector(state => state.orders.ordersList);

	const openOrderInfo = (orderId) => {
		dispatch(fetchOrderDetails({orderId}))
		.then(() => {
			dispatch(setCurrentDetailId({currentDetailId:orderId}));
			dispatch(toggleModal())
		})
		
	}

	useEffect(() => {
		dispatch(fetchOrders())
	},[])

	return (
		<div className="orders__row">
			
			{
				ordersList.map((order) => {
					return <OrdersItem 
					key={order.id} orderData={order}
					openOrderInfo={openOrderInfo}/>
				})
			}
		</div>
	) 
};

export default OrdersList;
