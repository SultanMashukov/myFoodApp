import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './BasketPage.scss';
import FoodType from './FoodType/FoodType';
import { removeFromBasket, restoreItemToBasket, toggleDelivery } from '../../../store/slices/sliceBasket';


const BasketPage = (props) => {

	const basketData = useSelector(state => state.basket);
	const dispatch = useDispatch();

	const removeItem = useCallback(
		(id) => {
			dispatch(removeFromBasket({id:id}))
		},[]
	) 
	
	const restoreItem = useCallback(
		(id) => {
			dispatch(restoreItemToBasket({id:id}))
		},[]
	) 

	const toggleDeliveryStatus = () => {
		dispatch(toggleDelivery())
	}


	// const mainFoodItems = basketData.basketItems.filter((item) => item.type === 'mainFood');
	// const drinkItems = basketData.basketItems.filter((item) => item.type === 'drink');

	const mainFoodItems = useMemo(() => basketData.basketItems.filter((item) => item.type === 'mainFood'), [basketData.basketItems]);
	const drinkItems =  useMemo(() => basketData.basketItems.filter((item) => item.type === 'drink'), [basketData.basketItems]);


	return (
		<div className="basket page-component">
			{
				basketData.needDelivery 
				?
					<div className="basket__place">
						<div className="basket__place-item" onClick={toggleDeliveryStatus}>В ресторане</div>
						<div className="basket__place-item basket__place-item--active" onClick={toggleDeliveryStatus}>Доставка</div>
					</div>
				:
					<div className="basket__place">
						<div className="basket__place-item basket__place-item--active" onClick={toggleDeliveryStatus}>В ресторане</div>
						<div className="basket__place-item" onClick={toggleDeliveryStatus}>Доставка</div>
					</div>

			}
			
			<div className="basket__address">
				КОМПОНЕНТ ВЫБОРА АДРЕСА
			</div>

			<FoodType foodType={basketData.basketSections.mainFood} items={mainFoodItems} removeItem={removeItem} restoreItem={restoreItem}/>
			<FoodType foodType={basketData.basketSections.drinks} items={drinkItems} removeItem={removeItem} restoreItem={restoreItem}/>

			<div className="basket__controls">
				<div className="basket__price">
					<div className="basket__price-value">
						Стоимость всего: { 
						
							basketData.basketItems.reduce((prev,cur) =>  !cur.removeMark ? (prev + cur.price * cur.count) : prev , 0)
						} <i className="fal fa-ruble-sign"></i>
					</div>
					
				</div>
				<button className="basket__order-btn">
					Заказать
				</button>
			</div>
			
		</div>
	) 
};

export default BasketPage;
