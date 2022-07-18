import SearchString from 'components/SearchString';
import React from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNameFilter } from 'store/slices/sliceCatalog';
import { debounce } from 'utils';

const CatalogSearchString = (props) => {
	const dispatch = useDispatch();

	const inutValue = useRef('');

	const changeSearchString = debounce(( string ) => {
		dispatch(setNameFilter({string}))
	},2000)

	const changeRefVal = ( string ) => {
		inutValue.current = string.trim()
		changeSearchString(inutValue.current)
	}

	return (
		<>
			<SearchString changeRefVal={changeRefVal} initSearchString={inutValue.current} refProp={inutValue}/>
		</>
	) 
};

export default CatalogSearchString;
