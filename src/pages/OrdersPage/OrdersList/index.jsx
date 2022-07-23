import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrdersItem from './OrdersItem';
import { setCurrentDetailId, toggleModal, fetchOrders, fetchOrderDetails, resetOrdersList } from 'store/slices/sliceOrders';
import { useEffect } from 'react';
import { useRef } from 'react';
import { getCookie, throttle } from 'utils';

const OrdersList = ({pageDOMElement}) => {
	const dispatch = useDispatch();
	const ordersList = useSelector(state => state.orders.ordersList);
	const isFetching = useSelector(state => state.orders.isFetching)

	const openOrderInfo = (orderId) => {
		dispatch(fetchOrderDetails({orderId}))
		.then(() => {
			dispatch(setCurrentDetailId({currentDetailId:orderId}));
			dispatch(toggleModal())
		})
		
	}

	const refPageNumber = useRef(1)

	useEffect(() => {
		dispatch(resetOrdersList())
		refPageNumber.current = 1
		dispatch(fetchOrders({
			page:refPageNumber.current,
		})) 
		refPageNumber.current = 2
	},[])

	useEffect(() => {
		const scrollHandler =  throttle((e)=>{
			const allItemsLoaded = getCookie('orders_count') <= ordersList.length
			if(!allItemsLoaded){
				const el = e.target;
				if( el.offsetHeight + el.scrollTop >= el.scrollHeight ){
					dispatch(fetchOrders({
						page:refPageNumber.current,
					}))
					++refPageNumber.current;
				}
			}
		},1000)
		const scrolledDOMEL = pageDOMElement.current;
		scrolledDOMEL.addEventListener('scroll',scrollHandler)
		return ()=> {
			scrolledDOMEL.removeEventListener('scroll',scrollHandler)
		}
	},[ordersList])

	return (
		<div className="orders__row">
			
			{
				ordersList.map((order) => {
					return <OrdersItem 
					key={order.id} orderData={order}
					openOrderInfo={openOrderInfo}/>
				})
			}
			{
				isFetching && <div className="orderList__loading">Загрузка...</div>
			}
		</div>
	) 
};

export default OrdersList;
