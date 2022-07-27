import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { toggleShowFavorites } from 'store/slices/sliceCatalog';
import CatalogSearchString from '../CatalogSearchString';

const CatalogControls = (props) => {
	
	const [searchParams] = useSearchParams();
	const [favoritesIsActive, setFavoritesIsActive]  = useState(false);
	const dispatch = useDispatch();
	
	const toggleFavorite = () => {
		dispatch(toggleShowFavorites())
		setFavoritesIsActive(!favoritesIsActive);
		
	}

	
	
	useEffect(() => {
		if( (searchParams.get('favorites') !== null) && !favoritesIsActive ){
			toggleFavorite()
		}
	},[])
	

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