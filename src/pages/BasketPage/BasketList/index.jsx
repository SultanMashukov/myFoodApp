import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasketListSection from './BasketListSection';
import { restoreItemToBasket, toggleModal, setModalInfo, deleteItem } from 'store/slices/sliceBasket';

const BasketList = (props) => {

	const dispatch = useDispatch();

	const basketItems = useSelector(state => state.basket.basketItems);
	const mainFoodItems = basketItems.filter((item) => ['giros','pizza'].includes(item.type));
	const drinkItems =	basketItems.filter((item) => ['drink'].includes(item.type))
	const dessertItems =	basketItems.filter((item) => ['dessert'].includes(item.type))
	const souseItems =	basketItems.filter((item) => ['souse'].includes(item.type))

	const removeItem = useCallback(
		(id) => {
			dispatch(deleteItem({basketId:id}))
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

	if(!basketItems.length)
		return <div className="basket__emptyNotification">Корзина пуста</div>

	return (
		<>
			<BasketListSection 
				items={mainFoodItems} 
				foodType={{name:'Покушать', placeholder: 'Ничего :( Нажмите, чтобы выбрать еду '}}
				catalogLink='/catalog'
				removeItem={removeItem}
				restoreItem={restoreItem}
				openChanger={openChanger}/>
			<BasketListSection 
				items={drinkItems} 
				foodType={{name:'Напитки', placeholder: 'А попить? Нажмите, чтобы подобрать напиток'}}
				catalogLink='/catalog/drink/'
				removeItem={removeItem}
				restoreItem={restoreItem}
				openChanger={openChanger}/>
			<BasketListSection 
				items={dessertItems} 
				foodType={{name:'Дессерты', placeholder: 'А десерт? Нажмите, чтобы выбрать десерт'}}
				catalogLink='/catalog/dessert/'
				removeItem={removeItem}
				restoreItem={restoreItem}
				openChanger={openChanger}/>
			<BasketListSection 
				items={souseItems} 
				foodType={{name:'Соусы', placeholder: 'Может соус? Нажмите, чтобы вырбрать соусы'}}
				catalogLink='/catalog/souse/'
				removeItem={removeItem}
				restoreItem={restoreItem}
				openChanger={openChanger}/>
		</>
	) 
};

export default BasketList;
