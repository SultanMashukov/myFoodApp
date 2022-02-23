import React, { useState } from 'react';
import Counter from '../../../common/Counter/Counter';
import './ProductModal.scss';
import ProductSlider from './ProductSlider/ProductSlider';

const ProductModal = ({toggleProductModal, productData}) => {

    const [productCount, setProductCount] = useState('1');
    const [productOptions, setProductOptions] = useState(productData.options.map((elem) => ({name: elem, checked: true})))
    
    
    const changeProductCount = (newCount) => {
        if(newCount>=1){
            setProductCount(newCount);
        }
    }

    const toggleProductOption = (optionName) => {
        setProductOptions((prevState) => {
            return prevState.map(option => option.name === optionName ? {...option, checked : !option.checked} : option)
        })
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
                
                <div className="product-modal__options">
                    {
                        productOptions.map((option, id) => (
                            <div className="product-modal__options-item" key={id} onClick={() => toggleProductOption(option.name)}>
                                <input className="product-modal__options-checkbox" 
                                type="checkbox" 
                                checked={option.checked}
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
                    <button className="product-modal__submit"><i className="fal fa-shopping-basket"></i></button>
                </div>
            </div>


			</div>
		</div>
	) 
};
export default ProductModal;
