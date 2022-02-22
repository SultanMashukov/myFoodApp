import React from 'react';
import Counter from '../../../common/Counter/Counter';
import './ProductModal.scss';
import ProductSlider from './ProductSlider/ProductSlider';

const ProductModal = ({active, toggleProductModal, productData}) => {

    console.log(productData);
    if(!productData)
        return false;
	return (
		<div className={ active ? 'product-modal product-modal--active' : 'product-modal' } onClick={(e) =>{
			if(e.target === e.currentTarget)
            toggleProductModal(false);
		}}>
			<div className={active ? 'product-modal__content product-modal__content--active' : 'product-modal__content'}>
				
			<div className="product-modal__close" onClick={(e) => toggleProductModal()}>
                <i className="fal fa-times"></i>
            </div>
            <ProductSlider imageURLs={productData.images}/>
			<div className="product-modal__info">
                <div className="product-modal__name">{productData.name}</div>
                <div className="product-modal__description">
                    {productData.description}
                </div>
                
                <div className="product-modal__options">
                    <div className="product-modal__options-item">
                        <input className="product-modal__options-checkbox" type="checkbox" name="onion" value="лук" checked="true"/>
                        <div className="product-modal__options-name">Соус</div>
                    </div>
                    <div className="product-modal__options-item">
                        <input className="product-modal__options-checkbox" type="checkbox" name="onion" value="лук" checked="true"/>
                        <div className="product-modal__options-name">ЛУК</div>
                    </div>
                </div>
                
                <div className="product-modal__order">
                    <div className="product-modal__price">
                        {productData.price} <i className="fal fa-ruble-sign"></i>
                    </div>
                    <Counter />
                    <button className="product-modal__submit"><i className="fal fa-shopping-basket"></i></button>
                </div>
            </div>


			</div>
		</div>
	) 
};
export default ProductModal;
