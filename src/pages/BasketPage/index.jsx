import React from 'react';
import './styles.scss';
import BasketDelivery from './BasketDelivery';
import BasketList from './BasketList';
import BasketChanger from './BasketChanger';
import BasketControls from './BasketControls';


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
