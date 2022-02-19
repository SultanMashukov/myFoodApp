import React, { useState } from 'react';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import './CatalogPage.scss';
import ProductModal from './ProductModal/ProductModal';

import ProductList from './ProductList/ProductList';

const CatalogPage = (props) => {

	const [modalActive,  setModalActive] = useState(false);
	

	return (
		<div className="page-food">
			<CatalogMenu/>
			<ProductList setModalActive={setModalActive}/>
			<ProductModal active={modalActive} setActive={setModalActive}/>
		</div>
	) 
};

export default CatalogPage;
