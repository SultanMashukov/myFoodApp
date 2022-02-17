import React, { useState } from 'react';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import './CatalogPage.scss';
import ProductModal from './ProductModal/ProductModal';
import girosImg from '../../../images/giros.jpg';

const CatalogPage = (props) => {

	const [modalActive,  setModalActive] = useState(false);
	const [productId, setProductId] = useState(0);

	let arr = [];
	for(let i = 0; i < 20; i++)
		arr.push(<div className="food-list__item" key={i}>
		<div className="food-list__item-pic " style={{backgroundImage: `url(${girosImg})`} }>
		</div>
		<div className="food-list__item-content">
			<div className="food-list__item-name">Гирос с курицей</div>
			<div className="food-list__item-price">190р</div>
			<button className="food-list__item-open" onClick={(e) => { setModalActive(true); setProductId(i) }}>Добавить</button>
		</div>
	</div>)


	return (
		<div className="page-food">
			<CatalogMenu/>
			<div className="food-list">
				<div className="food-list__row">
					{ arr }
				</div>
				
			</div>
			<ProductModal active={modalActive} setActive={setModalActive} productId = {productId}/>
		</div>
	) 
};

export default CatalogPage;
