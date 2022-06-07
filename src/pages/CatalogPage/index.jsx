import React, { useEffect } from 'react';
import CatalogMenu from './CatalogMenu';
import './styles.scss';
import CatalogList from './CatalogList';
import { useDispatch } from 'react-redux';
import { toggleModal,setProductModalId, fetchCatalogItems } from 'store/slices/sliceCatalog';
import CatalogPicker from './CatalogPicker';
import CatalogSearchString from './CatalogSearchString';

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
