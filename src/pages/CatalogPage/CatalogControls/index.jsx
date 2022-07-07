import React from 'react';
import { useState } from 'react';
import CatalogSearchString from '../CatalogSearchString';

const CatalogControls = ({toggleFavoriteFilter}) => {

	const [favoritesIsActive, setFavoritesIsActive]  = useState(false);

	const toggleFavorite = () => {
		toggleFavoriteFilter();
		setFavoritesIsActive(!favoritesIsActive)
	}

	return (
		<div className='catalogControls'>
			{/* <div className="catalogControls__btn catalogControls__priceOrder">
				<i className="fal fa-sort-amount-down"></i> Цена
			</div> */}
			<div 
				className={favoritesIsActive ? 'catalogControls__btn catalogControls__favorites--active' : 'catalogControls__btn'}
				onClick={toggleFavorite}>
					<i className="fas fa-heart"></i> Избранное
			</div>
			<CatalogSearchString/>

		</div>
	) 
};

export default CatalogControls;