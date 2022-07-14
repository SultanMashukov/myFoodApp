import React from 'react';

const CatalogItem = ({item , toggleProductFavoritStatus, toggleProductModal}) => {
	return (
		<div className="foodList__item" >
			<div className="foodList__itemPic " style={{backgroundImage: `url(${item?.images?.[0] || ''})`} }>
			</div>
			<div className="foodList__itemContent">
				<div className="foodList__itemName">{item.name}</div>
				<div className="foodList__itemControls">
					<button className={item.isFavorite 
						? 'foodList__itemButton foodList__itemFavorite--active'
						: 'foodList__itemButton foodList__itemFavorite'}
						onClick={()=>toggleProductFavoritStatus(item.id)}>
						<i className="fas fa-heart"></i>
					</button>
					<div className="foodList__itemPrice">{item.price} <i className="fal fa-ruble-sign"></i></div>
					<button className="foodList__itemButton" onClick={(e) => { toggleProductModal(item.id);}}>
						<i className="fal fa-shopping-basket"></i>
					</button>
				</div>
			</div>
		</div>
	) 
};

export default React.memo(CatalogItem);