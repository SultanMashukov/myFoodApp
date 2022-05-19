import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './Orders.scss';
import OrdersList from './OrdersList/OrdersList';

const Orders = (props) => {
	const ordersData = useSelector(state => state.orders);
	const ordersList = ordersData.ordersList;
	
	return (
		<div className="orders">
			<div className="pageHeader">
				<NavLink to='/personal/' className='pageHeader__back'>
					<i className="far fa-arrow-left"></i>
				</NavLink>
				<div className="pageHeader__title">
						История заказов
				</div>
			</div>
			<OrdersList ordersList={ordersList}/>
		</div>
	) 
};

export default Orders;
