import React from 'react';
import './ProductList.scss';
import girosImg from '../../../../images/giros.jpg';

const ProductList = ({setModalActive}) => {

	let arr = [];
	for(let i = 0; i < 20; i++)
		arr.push(<div className="food-list__item" key={i}>
		<div className="food-list__item-pic " style={{backgroundImage: `url(${girosImg})`} }>
		</div>
		<div className="food-list__item-content">
			<div className="food-list__item-name">Гирос с курицей</div>
			<div className="food-list__item-price">190р</div>
			<button className="food-list__item-open" onClick={(e) => { setModalActive(true);}}>Добавить</button>
		</div>
	</div>)

	return (
		<div className="food-list">
				<div className="food-list__row">
					{ arr }
				</div>
				
			</div>
	) 
};

export default ProductList;
