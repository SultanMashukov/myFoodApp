import React, { useState } from 'react';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import './CatalogPage.scss';
import ProductModal from './ProductModal/ProductModal';
import ProductList from './ProductList/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal,setProductModalId } from '../../../store/slices/sliceCatalog';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CatalogPage = (props) => {
	
	const catalogData = useSelector(state => state.catalog);
	const dispatch = useDispatch()
	console.log(catalogData.catalogItems[catalogData.productModalId]);
	const toggleProductModal = (id = '') => {
		dispatch(setProductModalId({id}))
		dispatch(toggleModal())
	}

	return (
		<div className="page-food">
			<CatalogMenu/>
			<ProductList toggleProductModal={toggleProductModal} productList={catalogData.catalogItems}/>
			<TransitionGroup>
				<CSSTransition classNames='option'>
					<ProductModal 
						active={catalogData.modalIsActive} 
						toggleProductModal={toggleProductModal} 
						productData={catalogData.catalogItems[catalogData.productModalId]}/>
				</CSSTransition>
				
			</TransitionGroup>
			
		</div>
	) 
};

export default CatalogPage;
