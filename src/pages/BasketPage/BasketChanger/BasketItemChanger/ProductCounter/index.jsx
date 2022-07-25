import Counter from 'components/Counter';
import React from 'react';
import { useState } from 'react';

const ProductCounter = ({changeCount, price}) => {
	
	const [productCount, setProductCount] = useState('1');

	const changeProductCount = (newCount) => {
        if(newCount>=1){
            setProductCount(newCount);
        }
		changeCount(newCount)
    }
	return (
		<>
			<div className="product-modal__price">
				{price * productCount} <i className="fal fa-ruble-sign"></i>
			</div>
			<Counter initCount={productCount} changeCount={changeProductCount}/>
		</>
		
	) 
};

export default ProductCounter;