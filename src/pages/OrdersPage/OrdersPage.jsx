import React from 'react';
import { NavLink } from 'react-router-dom';
import './OrdersPage.scss';
import OrdersList from './OrdersList/OrdersList';
import OrderInfo from './OrderInfo/OrderInfo';

const Orders = (props) => {
	
	
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
			<OrdersList/>
			<OrderInfo/>
			
		</div>
	) 
};

export default Orders;
