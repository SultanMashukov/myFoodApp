import React from 'react';
import './BasketPage.scss';
import BasketDelivery from './BasketDelivery/BasketDelivery';
import BasketList from './BasketList/BasketList';
import BasketChanger from './BasketChanger/BasketChanger';
import BasketControls from './BasketControls/BasketControls';


const BasketPage = (props) => {

	return (
		<div className="basket page-component">
			<BasketDelivery/>
			<BasketList/>
			<BasketControls/>
			<BasketChanger/>
		</div>
	) 
};

export default BasketPage;
