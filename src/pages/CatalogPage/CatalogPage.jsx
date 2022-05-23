import React, { useCallback, useEffect } from 'react';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import './CatalogPage.scss';
import CatalogList from './CatalogList/CatalogList';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal,setProductModalId, fetchCatalogItems, setNameFilter } from 'store/slices/sliceCatalog';
import SearchString from 'components/SearchString/SearchString';
import CatalogPicker from './CatalogPicker/CatalogPicker';
import CatalogSearchString from './CatalogSearchString/CatalogSearchString';

const CatalogPage = (props) => {
	const dispatch = useDispatch();

	const toggleProductModal = ( id ) => {
		if(id){
			dispatch(setProductModalId({id}))
			dispatch(toggleModal())
			
		}else{
			dispatch(toggleModal())
		}
		
	}

	useEffect(()=>{
		dispatch(fetchCatalogItems()) //запрос за каталогом к API
	},[dispatch])

	return (
		<div className="page-food">
			<CatalogMenu/>
			<CatalogSearchString/>
			<CatalogList toggleProductModal={toggleProductModal}/>
			<CatalogPicker toggleProductModal={toggleProductModal}/>
		</div>
	) 
};

export default CatalogPage;
