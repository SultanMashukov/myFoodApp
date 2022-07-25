import React from 'react';
import { useState } from 'react';

const ProductOptions = ({options, changeOption}) => {

	const [productOptions, setProductOptions] = useState(options);

	const toggleProductOption = (optionName) => {
        setProductOptions((prevState) => {
            return prevState.map(option => option.name === optionName ? {...option, active : !option.active} : option);
        })
		changeOption(optionName)
    }

	return (
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
	) 
};

export default ProductOptions;