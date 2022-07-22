import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from 'components/Counter';
import './styles.scss';
import ProductSlider from './ProductSlider';
import { changeItemInBasket, fetchProductData } from 'store/slices/sliceBasket';
import FetchLoadSpinner from 'components/FetchLoadSpinner';
import { useEffect } from 'react';

const BasketItemChanger = ({closeChanger, productId, basketItemId}) => {
    
    const productData = useSelector(state => state.basket.modalInfo.productData )
    const currentBasketItemData = useSelector(state => state.basket.basketItems.find(el => el.basketId === basketItemId))
    const [productCount, setProductCount] = useState(currentBasketItemData.count);
    const [productOptions, setProductOptions] = useState(currentBasketItemData.options);
    const dispatch = useDispatch();
    
    const changeProductCount = (newCount) => {
        if(newCount>=1){
            setProductCount(newCount);
        }
    }

    const toggleProductOption = (optionName) => {
        setProductOptions((prevState) => {
            return prevState.map(option => option.name === optionName ? {...option, active : !option.active} : option);
        })
    }

    const changeItem = () => {
        const dataForBasket = {
            basketItemId,
            count: productCount,
            options:productOptions,
        }
        dispatch(changeItemInBasket(dataForBasket));
        closeChanger();
    }

    useEffect(() => {
        dispatch(fetchProductData({id: productId}))
    },[])


    if(!productData){
        return(
            <div className='product-modal' onClick={(e) =>{
                if(e.target === e.currentTarget)
                closeChanger();
            }}>
                <div className='product-modal__content' >
                    <div className="product-modal__close" onClick={(e) => closeChanger()}>
                        <i className="fal fa-times"></i>
                    </div>
                    <FetchLoadSpinner/>
                </div>
            </div>
        )
    }

	return (
		<div className='product-modal' onClick={(e) =>{
			if(e.target === e.currentTarget)
            closeChanger();
		}}>
			<div className='product-modal__content' >
				
			<div className="product-modal__close" onClick={(e) => closeChanger()}>
                <i className="fal fa-times"></i>
            </div>
            <ProductSlider imageURLs={productData.images }/>
			<div className="product-modal__info">
                <div className="product-modal__name">{productData.name}</div>
                <div className="product-modal__description">
                    {productData.description}
                </div>
                
                <div className="product-modal__options">
                    {
                        productOptions.map((option, id) => (
                            <div className="product-modal__options-item" key={id} onClick={() => toggleProductOption(option.name)}>
                                <input className="product-modal__options-checkbox" 
                                type="checkbox" 
                                checked={option.active}
                                onChange={(e)=> toggleProductOption(option.name)}
                                />
                                <div className="product-modal__options-name">{option.name}</div>
                            </div>
                        ))
                    }
                    
                </div>
                
                <div className="product-modal__order">
                    <div className="product-modal__price">
                        {productData.price * productCount} <i className="fal fa-ruble-sign"></i>
                    </div>
                    <Counter initCount={productCount} changeCount={changeProductCount}/>
                    <button className="product-modal__submit" onClick={() => changeItem()}><i className="fal fa-shopping-basket"></i></button>
                </div>
            </div>


			</div>
		</div>
	) 
};
export default BasketItemChanger;
