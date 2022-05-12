import React, { useEffect } from 'react';
import CatalogMenu from './CatalogMenu/CatalogMenu';
import './CatalogPage.scss';
import ProductModal from './ProductModal/ProductModal';
import ProductList from './ProductList/ProductList';
import LoadingSpinner from '../../common/LoaderSpinner/LoaderSpinner'
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal,setProductModalId, fetchCatalogItems, setNameFilter } from '../../../store/slices/sliceCatalog';
import { CSSTransition } from 'react-transition-group';
import { useParams } from 'react-router-dom';
import SearchString from '../../common/SearchString/SearchString';

const CatalogPage = (props) => {
	const urlParams = useParams();
	const catalogData = useSelector( state => state.catalog );
	const dispatch = useDispatch();
	const loadingStatus = catalogData.listFetchStatus;
	let productList, modalProductData;

	const toggleProductModal = ( id ) => {
		if(id){
			dispatch(setProductModalId({id}))
			dispatch(toggleModal())
			
		}else{
			dispatch(toggleModal())
		}
		
	}
	const changeSearchString = ( string ) => {
		dispatch(setNameFilter({string}))
	}

	useEffect(()=>{
		dispatch(fetchCatalogItems())
	},[dispatch])

	if(catalogData.catalogItems){
		productList = urlParams.category ? catalogData.catalogItems.filter((item) => item.food_type.code === urlParams.category ): catalogData.catalogItems;
		modalProductData = catalogData.catalogItems.find(elem => elem.id === catalogData.productModalId);
	}
	if(catalogData.nameFilter){
		productList = productList.filter(item => item.name.toLowerCase().includes(catalogData.nameFilter))
	}
	
	return (
		<div className="page-food">
			<CatalogMenu/>
			<SearchString changeSearchString={changeSearchString} initSearchString={catalogData.nameFilter}/>
			{loadingStatus === 'loaded' && <ProductList toggleProductModal={toggleProductModal} productList={productList}/>}
			{ loadingStatus === 'pending' && <LoadingSpinner/> }
			{ loadingStatus === 'rejected' && <div className="error">{catalogData.listFetchError}</div> }
			<CSSTransition 
				in={catalogData.modalIsActive}
				classNames='product-modal'
				timeout={300}
				mountOnEnter
				unmountOnExit
			>
				<ProductModal 
					toggleProductModal={toggleProductModal} 
					productData={modalProductData}/>
			</CSSTransition>
		</div>
	) 
};

export default CatalogPage;
