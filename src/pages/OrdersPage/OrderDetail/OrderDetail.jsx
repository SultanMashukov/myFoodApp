import React, { useMemo } from 'react';
import './OrderDetail.scss';
import FoodType from './FoodType/FoodType';

const OrderDetail = ({orderData}) => {

	const mainFoodItems = useMemo(() => {
		return orderData.positions.filter((item) => ['giros','pizza'].includes(item.type))
	}, [orderData]);

	const drinkItems =  useMemo(() => {
		return orderData.positions.filter((item) => ['drink'].includes(item.type))
	}, [orderData]);

	return (
		<div className="basket page-component">
			{
				orderData.needDelivery 
				?
					<div className="basket__place">
						<div className="basket__place-item">В ресторане</div>
						<div className="basket__place-item basket__place-item--active" >Доставка</div>
					</div>
				:
					<div className="basket__place">
						<div className="basket__place-item basket__place-item--active">В ресторане</div>
						<div className="basket__place-item">Доставка</div>
					</div>

			}
			
			<div className="basket__address">
				КОМПОНЕНТ ВЫБОРА АДРЕСА
			</div>

			<FoodType 
				foodType={orderData.basketSections.mainFood} 
				items={mainFoodItems}
				/>
			<FoodType 
				foodType={orderData.basketSections.drinks} 
				items={drinkItems}/>
		</div>
	) 
};

export default OrderDetail;
