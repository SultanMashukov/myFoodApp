import React from 'react';
import './styles.scss';
import FoodType from './FoodType';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from 'store/slices/sliceOrders';
import { repeatBasketByOrder } from 'store/slices/sliceBasket';
import { useNavigate } from 'react-router-dom';

const OrderDetail = ({orderId}) => {
	
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const orderData = useSelector( state => state.orders.ordersList ).find( el => el.id === orderId );
	const mainFoodItems =  orderData.positions.filter((item) => ['giros','pizza'].includes(item.catalog.food_type.code));
	const drinkItems = orderData.positions.filter((item) => ['drink'].includes(item.catalog.food_type.code));
	const dessertItems =	orderData.positions.filter((item) => ['dessert'].includes(item.catalog.food_type.code))
	const souseItems =	orderData.positions.filter((item) => ['sauces'].includes(item.catalog.food_type.code))

	const closeOrdersDetail = () => {
		dispatch(toggleModal())
	}
	const repeatOrder = () => {
        dispatch(repeatBasketByOrder({orderPositions: orderData.positions}));
		navigate('/basket',{replace:true})
    }


	return (
		<div className="ordersDetail">
			<div className="ordersDetail__controls">
				<div className="ordersDetail__repeatBtn" onClick={repeatOrder}>
					<i className="fal fa-redo"></i> Повторить 
				</div>
				<div className="ordersDetail__closeBtn" onClick={closeOrdersDetail}>
					<i className='fal fa-times'></i> 
				</div>
			</div>
			<div className="ordersDetail__metaInfo">
				<div className="ordersDetail__metaInfoItem">
					<i className="far fa-map"></i> {orderData.address.string}
				</div>
				<div className="ordersDetail__metaInfoItem">
					<i className="fal fa-calendar-alt"></i> {new Date(orderData.createdAt).toLocaleString()} 
				</div>
				<div className="ordersDetail__metaInfoItem">
					<i className="fal fa-ruble-sign"></i> {orderData.totalPrice}
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
			<FoodType 
				foodType={{
					name:'Десерты',
					placeholder: 'А десерт? Нажмите, чтобы выбрать десерт'
				}}
				items={dessertItems} />
			<FoodType 
				
				foodType={{
					name:'Соусы', 
					placeholder: 'Может соус? Нажмите, чтобы вырбрать соусы'
				}} 
				items={souseItems} />
		</div>
	) 
};

export default OrderDetail;
