import React from 'react';
import './OrdersItem.scss';

const OrdersItem = ({orderData}) => {

	let statusComp = null;
	switch(orderData.status.name){
		case('inProcess'):
			statusComp = <div className="orders__item-status orders__item-status--processing">
											<i className="fas fa-clock"></i>
									</div>
			break;
		case('complete'):
			statusComp = <div className="orders__item-status orders__item-status--ready">
											<i className="fas fa-check-double"></i>
									</div>
			break;
		default:
			break;
	}

	return (
		<div className="orders__item">
			{
				statusComp
			}
			<div className="orders__item-name">
					{orderData.name}
			</div>
			<div className="orders__item-info">
					<div className="orders__item-price">Сумма заказа: {orderData.price} <i className="fal fa-ruble-sign"></i></div>
					<div className="orders__item-date">Дата: {orderData.date}</div>
			</div>
		</div>
	) 
};

export default OrdersItem;
