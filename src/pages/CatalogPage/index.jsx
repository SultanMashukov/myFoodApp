import React, { useEffect } from 'react';
import CatalogMenu from './CatalogMenu';
import './styles.scss';
import CatalogList from './CatalogList';
import { useDispatch } from 'react-redux';
import { toggleModal,setProductModalId, toggleShowFavorites } from 'store/slices/sliceCatalog';
import CatalogPicker from './CatalogPicker';
import CatalogControls from './CatalogControls';
import { useRef } from 'react';

const CatalogPage = (props) => {
	const dispatch = useDispatch();

	const toggleProductModal = ( id ) => {
		if(id){
			dispatch(setProductModalId({id}))
			dispatch(toggleModal())
			
		}else{
			dispatch(toggleModal())
		}
		
	}

	const toggleFavoriteFilter = () => {
		dispatch(toggleShowFavorites())
	}

	const pageDOMElement = useRef()

	return (
		<div className="page-food" ref={pageDOMElement}>
			<CatalogMenu/>
			<CatalogControls toggleFavoriteFilter={toggleFavoriteFilter}/>
			<CatalogList toggleProductModal={toggleProductModal} pageDOMElement={pageDOMElement}/>
			<CatalogPicker toggleProductModal={toggleProductModal}/>
		</div>
	) 
};

export default CatalogPage;
