import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './BasketPage.scss';
import FoodType from './FoodType/FoodType';
import { removeFromBasket, restoreItemToBasket, toggleDelivery, toggleModal, setModalInfo } from '../../../store/slices/sliceBasket';
import { CSSTransition} from 'react-transition-group';
import BasketItemChanger from './BasketItemChanger/BasketItemChanger';


const BasketPage = (props) => {

	const dispatch = useDispatch();
	const basketData = useSelector(state => state.basket);

	const mainFoodItems = useMemo(() => {
		return basketData.basketItems.filter((item) => ['giros','pizza'].includes(item.type))
	}, [basketData.basketItems]);

	const drinkItems =  useMemo(() => {
		return basketData.basketItems.filter((item) => ['drinks'].includes(item.type))
	}, [basketData.basketItems]);

	const removeItem = useCallback(
		(id) => {
			dispatch(removeFromBasket({basketId:id}))
		},[]
	) 
	
	const restoreItem = useCallback(
		(id) => {
			dispatch(restoreItemToBasket({basketId:id}))
		},[]
	) 

	const toggleDeliveryStatus = () => {
		dispatch(toggleDelivery())
	}

	const toggleItemChangerModal = ( productId, basketItemId ) => {
		if(productId && basketItemId){
			dispatch(setModalInfo({productId,basketItemId}))
			dispatch(toggleModal())
			
		}else{
			dispatch(toggleModal())
		}
		
	}

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

			<FoodType 
				foodType={basketData.basketSections.mainFood} 
				items={mainFoodItems} removeItem={removeItem} 
				restoreItem={restoreItem}
				toggleItemChangerModal={toggleItemChangerModal}/>
			<FoodType 
				foodType={basketData.basketSections.drinks} 
				items={drinkItems} removeItem={removeItem} 
				restoreItem={restoreItem}
				toggleItemChangerModal={toggleItemChangerModal}/>

			<div className="basket__controls">
				<div className="basket__price">
					<div className="basket__price-value">
						Стоимость всего: { 
							basketData.basketItems.reduce((prev,cur) =>  !cur.removeMark ? (prev + cur.price * cur.count) : prev , 0)
						} 
						<i className="fal fa-ruble-sign"></i>
					</div>
					
				</div>
				<button className="basket__order-btn">
					Заказать
				</button>
			</div>
			<CSSTransition
			timeout={300}
			in={basketData.modalIsActive}
			classNames='product-modal'
			mountOnEnter
			unmountOnExit>
				{<BasketItemChanger productId={basketData.modalInfo.productId} basketItemId={basketData.modalInfo.basketItemId} toggleModal={toggleItemChangerModal}/> }
			</CSSTransition>
			
			
		</div>
	) 
};

export default BasketPage;
