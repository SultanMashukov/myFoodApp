import SearchString from 'components/SearchString/SearchString';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNameFilter } from 'store/slices/sliceCatalog';

const CatalogSearchString = (props) => {
	const dispatch = useDispatch();
	const nameFilterValue = useSelector(state => state.catalog.nameFilter)

	const changeSearchString = ( string ) => {
		dispatch(setNameFilter({string}))
	}

	return (
		<>
			<SearchString changeSearchString={changeSearchString} initSearchString={nameFilterValue}/>
		</>
	) 
};

export default CatalogSearchString;
