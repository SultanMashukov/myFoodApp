import React, { useState } from 'react';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import './CatalogPage.scss';
import ProductModal from './ProductModal/ProductModal';
import ProductList from './ProductList/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal,setProductModalId } from '../../../store/slices/sliceCatalog';
import { CSSTransition } from 'react-transition-group';

const CatalogPage = (props) => {
	
	const catalogData = useSelector( state => state.catalog );
	const dispatch = useDispatch()
	
	const toggleProductModal = ( id ) => {
		if(id){
			dispatch(setProductModalId({id}))
			dispatch(toggleModal())
			
		}else{
			dispatch(toggleModal())
		}
		
	}

	
	const	modalProductData = catalogData.catalogItems.find(elem => elem.id === catalogData.productModalId);
	
	return (
		<div className="page-food">
			<CatalogMenu/>
			<ProductList toggleProductModal={toggleProductModal} productList={catalogData.catalogItems}/>
			<CSSTransition 
				in={catalogData.modalIsActive}
				classNames='product-modal'
				timeout={300}
				mountOnEnter
				unmountOnExit
			>
				<ProductModal 
					toggleProductModal={toggleProductModal} 
					productData={modalProductData}/>
			</CSSTransition>
		</div>
	) 
};

export default CatalogPage;
