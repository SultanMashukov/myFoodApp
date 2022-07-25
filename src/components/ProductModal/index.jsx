import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import ProductSlider from './ProductSlider';
import { addItemToBasket } from 'store/slices/sliceBasket';
import ProductOptions from './ProductOptions';
import ProductCounter from './ProductCounter';

const ProductModal = ({toggleProductModal, productData}) => {
    
    const dispatch = useDispatch();
    const refCountAndOption = useRef({
        count: 1,
        options: productData.options.map((elem) => ({name: elem, active: true}))
    })
    
    const changeCount = (newCount) => {
        refCountAndOption.current.count = newCount;
    }
    const changeOption = (optionName) => {
        let elemId = refCountAndOption.current.options.findIndex(el => el.name === optionName);
        refCountAndOption.current.options[elemId].active = !refCountAndOption.current.options[elemId].active
    }

    const addProductToBasket = () => {
        const dataForBasket = {
            productId: productData.id,
            name: productData.name,
            image: productData.images[0],
            count: refCountAndOption.current.count,
            price: productData.price,
            options: refCountAndOption.current.options,
            type: productData.food_type.code,
        }
        dispatch(addItemToBasket(dataForBasket));
        toggleProductModal();
    }
    
	return (
		<div className='product-modal' onClick={(e) =>{
			if(e.target === e.currentTarget)
            toggleProductModal(false);
		}}>
			<div className='product-modal__content' >
                <div className="product-modal__close" onClick={(e) => toggleProductModal()}>
                    <i className="fal fa-times"></i>
                </div>
                <ProductSlider imageURLs={productData.images }/>
                <div className="product-modal__info">
                    <div className="product-modal__name">{productData.name}</div>
                    <div className="product-modal__description">
                        {productData.description}
                    </div>
                    <ProductOptions options={productData.options} changeOption={changeOption}/>
                    <div className="product-modal__order">
                        
                        <ProductCounter changeCount={changeCount} price={productData.price}/>
                        
                        <button className="product-modal__submit" onClick={() => addProductToBasket()}><i className="fal fa-shopping-basket"></i></button>
                    </div>
                </div>
			</div>
		</div>
	) 
};
export default ProductModal;
