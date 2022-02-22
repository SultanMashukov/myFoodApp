import React from 'react';
import './ProductList.scss';


const ProductList = ({productList, toggleProductModal}) => {

	
	
	return (
		<div className="food-list">
				<div className="food-list__row">
					{
						productList.map((item) => {
							return(
								<div className="food-list__item" key={item.id}>
									<div className="food-list__item-pic " style={{backgroundImage: `url(${item?.images?.[0] || ''})`} }>
									</div>
									<div className="food-list__item-content">
										<div className="food-list__item-name">{item.name}</div>
										<div className="food-list__item-price">{item.price}р</div>
										<button className="food-list__item-open" onClick={(e) => { toggleProductModal(item.id);}}>Добавить {item.id}</button>
									</div>
								</div>
							)
						})
					}
				</div>
				
			</div>
	) 
};

export default ProductList;
