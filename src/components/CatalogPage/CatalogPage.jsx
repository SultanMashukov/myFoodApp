import React from 'react';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import './CatalogPage.css';

const CatalogPage = (props) => {
	let arr = [];
	for(let i = 0; i < 20; i++)
		arr.push(<div className="food-list__item" key={i}>
		<div className="food-list__item-pic " style={{backgroundImage: 'url(../images/giros.jpg)'} }>
		</div>
		<div className="food-list__item-content">
			<div className="food-list__item-name">Гирос с курицей</div>
			<div className="food-list__item-price">190р</div>
			<a href="" className="food-list__item-open">Добавить</a>
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
		</div>
	) 
};

export default CatalogPage;
