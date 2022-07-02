import React from 'react';

const OrdersItem = ({orderData, openOrderInfo}) => {

	let statusComp = null;
	switch(orderData.status.name){
		case('inProgress'):
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
		<div className="orders__item" onClick={e => openOrderInfo(orderData.id)}>
			{
				statusComp
			}
			<div className="orders__item-name">
					{orderData.name}
			</div>
			<div className="orders__item-info">
					<div className="orders__item-price">Сумма заказа: {orderData.totalPrice} <i className="fal fa-ruble-sign"></i></div>
					<div className="orders__item-date">Дата: {new Date(orderData.date).toLocaleDateString()}</div>
			</div>
		</div>
	) 
};

export default OrdersItem;
