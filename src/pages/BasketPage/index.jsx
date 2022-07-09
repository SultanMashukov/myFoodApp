import React from 'react';
import './styles.scss';
import BasketDelivery from './BasketDelivery';
import BasketList from './BasketList';
import BasketChanger from './BasketChanger';
import BasketControls from './BasketControls';


const BasketPage = (props) => {

	return (
		<div className="basket">
			<div className="pageHeader">
				<div className="pageHeader__title">
						Корзина
				</div>
			</div>
			<div className="basket__inner">
				<BasketDelivery/>
				<BasketList/>
				<BasketControls/>
				<BasketChanger/>
			</div>
		</div>
	) 
};

export default BasketPage;
