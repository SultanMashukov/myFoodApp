import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import OrdersList from './OrdersList';
import OrderInfo from './OrderInfo';
import { useRef } from 'react';

const OrdersPage = (props) => {
	
	const pageDOMElement = useRef()
	
	return (
		<div className="orders" ref={pageDOMElement}>
			<div className="pageHeader">
				<NavLink to='/personal/' className='pageHeader__back'>
					<i className="far fa-arrow-left"></i>
				</NavLink>
				<div className="pageHeader__title">
						История заказов
				</div>
			</div>
			<OrdersList pageDOMElement={pageDOMElement}/>
			<OrderInfo/>
			
		</div>
	) 
};

export default OrdersPage;
