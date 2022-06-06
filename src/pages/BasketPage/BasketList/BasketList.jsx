import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './BasketList.scss';
import BasketListSection from './BasketListSection/BasketListSection';
import { removeFromBasket, restoreItemToBasket, toggleModal, setModalInfo } from 'store/slices/sliceBasket';

const BasketList = (props) => {

	const dispatch = useDispatch();

	const basketItems = useSelector(state => state.basket.basketItems);
	const mainFoodItems = basketItems.filter((item) => ['giros','pizza'].includes(item.type));
	const drinkItems =	basketItems.filter((item) => ['drink'].includes(item.type))

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

	const openChanger = ( productId, basketItemId ) => {
		if(productId && basketItemId){
			dispatch(setModalInfo({productId,basketItemId}))
			dispatch(toggleModal('Y'))
		}
	}

	return (
		<>
			<BasketListSection 
				items={mainFoodItems} 
				foodType={{name:'Главыные блюда', placeholder: 'Ничего :( Нажмите, чтобы выбрать еду '}}
				removeItem={removeItem}
				restoreItem={restoreItem}
				openChanger={openChanger}/>
			<BasketListSection 
				items={drinkItems} 
				foodType={{name:'Напитки', placeholder: 'А попить? Нажмите, чтобы подобрать напиток'}}
				removeItem={removeItem}
				restoreItem={restoreItem}
				openChanger={openChanger}/>
		</>
	) 
};

export default BasketList;
