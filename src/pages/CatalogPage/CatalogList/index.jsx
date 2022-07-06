import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import './styles.scss';
import LoaderSpinner from 'components/LoaderSpinner';
import CatalogSearchString from '../CatalogSearchString';


const CatalogList = ({toggleProductModal}) => {

	const urlParams = useParams();
	const listFetchingInfo = useSelector(state => state.catalog.listFetchingInfo);
	const nameFilter = useSelector(state => state.catalog.nameFilter);
	let catalogList = useSelector( state => state.catalog.catalogItems);

	if(catalogList){
		catalogList = urlParams.category ? catalogList.filter((item) => item.food_type.code === urlParams.category ): catalogList;
	}
	if(nameFilter){
		catalogList = catalogList.filter(item => item.name.toLowerCase().includes(nameFilter))
	}

	if(listFetchingInfo.status === 'pending')
		return <LoaderSpinner/>
	if(listFetchingInfo.status === 'rejected')
		return <div className="error">{listFetchingInfo.errorMsg}</div>
	if(listFetchingInfo.status === 'loaded')
		return (
			<div className="foodList">
				<CatalogSearchString/>
				<div className="foodList__row">
					{
						catalogList.length 
						?catalogList.map((item) => {
							return(
								<div className="foodList__item" key={item.id}>
									<div className="foodList__itemPic " style={{backgroundImage: `url(${item?.images?.[0] || ''})`} }>
									</div>
									<div className="foodList__itemContent">
										<div className="foodList__itemName">{item.name}</div>
										<div className="foodList__itemControls">
											<button className={item.isFavorite 
											? 'foodList__itemButton foodList__itemFavorite--active'
											: 'foodList__itemButton foodList__itemFavorite'}>
												<i className="fas fa-heart"></i>
											</button>
											<div className="foodList__itemPrice">{item.price} <i className="fal fa-ruble-sign"></i></div>
											<button className="foodList__itemButton" onClick={(e) => { toggleProductModal(item.id);}}>
												<i className="fal fa-shopping-basket"></i>
											</button>
										</div>
									</div>
								</div>
							)
						})
						:'Ничего нет :('
					}
				</div>
			</div>
		)
	return <></>
};

export default CatalogList;
