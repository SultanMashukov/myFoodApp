import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import ProductSlider from './ProductSlider';
import { changeItemInBasket, fetchProductData } from 'store/slices/sliceBasket';
import FetchLoadSpinner from 'components/FetchLoadSpinner';
import { useEffect } from 'react';
import { useRef } from 'react';
import ProductCounter from './ProductCounter';
import ProductOptions from './ProductOptions';

const BasketItemChanger = ({closeChanger, productId, basketItemId}) => {
    
    const productData = useSelector(state => state.basket.modalInfo.productData )
    const currentBasketItemData = useSelector(state => state.basket.basketItems.find(el => el.basketId === basketItemId))
    
    const dispatch = useDispatch();

    const refCountAndOption = useRef({
        count: currentBasketItemData.count,
        options: currentBasketItemData.options.map((elem) => {
            return {
                name: elem.name,
                active: elem.active
            }
        })
    })
    
    const changeCount = (newCount) => {
        refCountAndOption.current.count = newCount;
    }
    const changeOption = (optionName) => {
        let elemId = refCountAndOption.current.options.findIndex(el => el.name === optionName);
        refCountAndOption.current.options[elemId].active = !refCountAndOption.current.options[elemId].active
    }

    const changeItem = () => {
        const dataForBasket = {
            basketItemId,
            count: refCountAndOption.current.count,
            options: refCountAndOption.current.options,
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
                <ProductOptions options={refCountAndOption.current.options} changeOption={changeOption}/>
                <div className="product-modal__order">
                    <ProductCounter  changeCount={changeCount} price={productData.price} startCount={refCountAndOption.current.count}/>
                    <button className="product-modal__submit" onClick={() => changeItem()}><i className="fal fa-shopping-basket"></i></button>
                </div>
            </div>


			</div>
		</div>
	) 
};
export default BasketItemChanger;
