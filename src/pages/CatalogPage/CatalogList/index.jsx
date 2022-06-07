import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import './styles.scss';
import LoaderSpinner from 'components/LoaderSpinner';


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
			<div className="food-list">
				<div className="food-list__row">
					{
						catalogList.length 
						?catalogList.map((item) => {
							return(
								<div className="food-list__item" key={item.id} onClick={(e) => { toggleProductModal(item.id);}}>
									<div className="food-list__item-pic " style={{backgroundImage: `url(${item?.images?.[0] || ''})`} }>
									</div>
									<div className="food-list__item-content">
										<div className="food-list__item-name">{item.name}</div>
										<div className="food-list__item-price">{item.price}р</div>
										<button className="food-list__item-open">Добавить</button>
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
