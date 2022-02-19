import React from 'react';
import './ProductList.scss';
import girosImg from '../../../../images/giros.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../../../store/slices/sliceCatalog';

const ProductList = ({setModalActive}) => {

	
	const list = useSelector(state => state.catalog.catalogItems);
	const dispatch = useDispatch()

	const addNewItem = (info) => {
		dispatch(addItem(info))
	}

	return (
		<div className="food-list">
				<div className="food-list__row">
					{
						list.map((item) => {
							return(
								<div className="food-list__item" key={item.id}>
									<div className="food-list__item-pic " style={{backgroundImage: `url(${item?.images?.[0] || ''})`} }>
									</div>
									<div className="food-list__item-content">
										<div className="food-list__item-name">{item.name}</div>
										<div className="food-list__item-price">{item.price}р</div>
										<button className="food-list__item-open" onClick={(e) => { setModalActive(true);}}>Добавить</button>
									</div>
								</div>
							)
						})
					}
				</div>
				<button onClick={()=>addNewItem({
					id:201,
					name: 'Чича',
					price: 789
				})}>
					ADD NEW ITEM
				</button>
				
			</div>
	) 
};

export default ProductList;
