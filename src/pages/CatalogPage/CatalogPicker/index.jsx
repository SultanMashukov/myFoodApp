import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ProductModal from 'components/ProductModal/ProductModal';
import { useSelector } from 'react-redux';

const CatalogPicker = ({toggleProductModal}) => {
	const modalIsActive = useSelector(state => state.catalog.modalIsActive)
	const productList = useSelector(state => state.catalog.catalogItems);
	const productModalId = useSelector(state => state.catalog.productModalId);
	const modalProductData = productModalId ? productList.find(elem => elem.id === productModalId):'';
	return (
		<>
			<CSSTransition 
				in={modalIsActive}
				classNames='product-modal'
				timeout={300}
				mountOnEnter
				unmountOnExit
			>
				<ProductModal 
					toggleProductModal={toggleProductModal} 
					productData={modalProductData}/>
			</CSSTransition>
		</>
	) 
};

export default CatalogPicker;
