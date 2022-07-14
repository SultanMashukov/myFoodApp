import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import './styles.scss';
import LoaderSpinner from 'components/LoaderSpinner';
import { useDispatch } from 'react-redux';
import { fetchCatalogItems, toggleProductIsFavorite } from 'store/slices/sliceCatalog';
import { useEffect } from 'react';
import { getCookie, throttle } from 'utils';
import { useRef } from 'react';
import CatalogItem from './CatalogItem';


const CatalogList = ({toggleProductModal, pageDOMElement}) => {

	const urlParams = useParams();
	
	const dispatch = useDispatch();
	const listFetchingInfo = useSelector(state => state.catalog.listFetchingInfo);
	const nameFilter = useSelector(state => state.catalog.nameFilter);
	const favoritesList = useSelector(state => state.catalog.favorites)
	let catalogList = useSelector( state => state.catalog.catalogItems);
	const favoritesOnly = useSelector( state => state.catalog.showFavorites);

	const toggleProductFavoritStatus = useCallback((catalogId) => {
		dispatch(toggleProductIsFavorite(catalogId))
	},[])

	const refPageNumber = useRef(2)
	const refScrollPosition = useRef(0)

	
	useEffect(() => {
		const scrollHandler = throttle((e)=>{
			const allItemsLoaded = getCookie('catalog_count') <= catalogList.length
			if(!allItemsLoaded){
				const el = e.target;
				refScrollPosition.current = el.scrollTop;
				if( el.offsetHeight + el.scrollTop + 100 >= el.scrollHeight ){
					refScrollPosition.current = el.scrollTop;
					dispatch(fetchCatalogItems({page:refPageNumber.current}))
					++refPageNumber.current;
				}
			}
			
		},1000)

		pageDOMElement.current.addEventListener('scroll',scrollHandler)
		
		return ()=> {
			pageDOMElement.current.removeEventListener('scroll',scrollHandler)
		}
	},[catalogList])

	//фильтр, оставляющий только избранные товары
	if(catalogList && favoritesOnly){
		catalogList = catalogList.filter(item => favoritesList.includes(item.id))
	}
	//фильтр, оставляющие товары выбранной категории
	if(catalogList){
		catalogList = urlParams.category ? catalogList.filter((item) => item.food_type.code === urlParams.category ): catalogList;
	}
	//фильтр по названию
	if(nameFilter){
		catalogList = catalogList.filter(item => item.name.toLowerCase().includes(nameFilter))
	}

	return (
		<div className="foodList">
			<div className="foodList__row">
				{
					catalogList.length 
					?catalogList.map((item) => {
						//проверка на "избранность" товара
						if(favoritesList.length){
							item = favoritesList.includes(item.id) 
							? {...item,isFavorite: true} 
							: {...item,isFavorite: false}
						}
						return(
								<CatalogItem item={item} key={item.id} 
								toggleProductFavoritStatus={toggleProductFavoritStatus}
								toggleProductModal={toggleProductModal}/>
						)
					})
					:<div className='foodList__empty'>Ничего не найдено :(</div>
				}
			</div>
			{
				listFetchingInfo.status === 'pending' && <div className="foodList__loading">Загрузка...</div>
			}
		</div>
	)
};

export default CatalogList;
