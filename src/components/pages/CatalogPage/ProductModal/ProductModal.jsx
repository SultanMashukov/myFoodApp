import React from 'react';
import './ProductModal.scss';

const ProductModal = ({active, setActive, children, productId}) => {
	return (
		<div className={ active ? 'product-modal product-modal--active' : 'product-modal' } onClick={(e) =>{
			if(e.target === e.currentTarget)
				setActive(false);
		}}>
			<div className={active ? 'product-modal__content product-modal__content--active' : 'product-modal__content'}>
				{productId}
			</div>
		</div>
	) 
};
export default ProductModal;
