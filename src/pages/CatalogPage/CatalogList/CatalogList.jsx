import React from 'react';
import './CatalogList.scss';


const ProductList = ({productList, toggleProductModal}) => {
	return (
		<div className="food-list">
				<div className="food-list__row">
					{
						productList.length 
						?productList.map((item) => {
							return(
								<div className="food-list__item" key={item.id} onClick={(e) => { toggleProductModal(item.id);}}>
									<div className="food-list__item-pic " style={{backgroundImage: `url(${item?.images?.[0] || ''})`} }>
									</div>
									<div className="food-list__item-content">
										<div className="food-list__item-name">{item.name}</div>
										<div className="food-list__item-price">{item.price}р</div>
										<button className="food-list__item-open">Добавить</button>
									</div>
								</div>
							)
						})
						:'Ничего нет :('
					}
				</div>
				
			</div>
	) 
};

export default ProductList;
