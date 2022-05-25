import React from 'react';
import './OrderDetail.scss';
import FoodType from './FoodType/FoodType';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'store/slices/sliceOrders';

const OrderDetail = ({orderId}) => {
	
	const dispatch = useDispatch();
	const orderData = useSelector( state => state.orders.ordersList ).find( el => el.id === orderId );

	const mainFoodItems =  orderData.positions.filter((item) => ['giros','pizza'].includes(item.type));
	const drinkItems = orderData.positions.filter((item) => ['drink'].includes(item.type));

	const closeOrdersDetail = () => {
		dispatch(toggleModal())
	}

	return (
		<div className="ordersDetail">
			<div className="ordersDetail__controls">
				<div className="ordersDetail__repeatBtn">
					<i class="fal fa-redo"></i> Повторить 
				</div>
				<div className="ordersDetail__closeBtn" onClick={closeOrdersDetail}>
					<i className='fal fa-times'></i> 
				</div>
			</div>
			<div className="ordersDetail__metaInfo">
				<div className="ordersDetail__metaInfoItem">
					<i class="far fa-map"></i> ул.Кирова 23, кв 2
				</div>
				<div className="ordersDetail__metaInfoItem">
					<i class="fal fa-calendar-alt"></i> 20.12.2021 13:40
				</div>
				<div className="ordersDetail__metaInfoItem">
					<i class="fal fa-ruble-sign"></i> {orderData.totalPrice}
				</div>
			</div>
			
			<FoodType 
				foodType={{
					name: 'Основные блюда',
					placeholder: 'Вы ничего не выбрали из блюд. Нажмите, чтобы добавить.',
				}} 
				items={mainFoodItems}
				/>
			<FoodType 
				foodType={{
					name: 'Напитки',
					placeholder: 'Вы не выбрали ни один из напитков. Нажмите, чтобы добавить напиток.',
				}} 
				items={drinkItems}/>
		</div>
	) 
};

export default OrderDetail;
