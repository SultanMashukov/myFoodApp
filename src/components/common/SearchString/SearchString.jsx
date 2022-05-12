import React from 'react';
import './SearchString.scss';

const SearchString = ({changeSearchString, initSearchString}) => {
	return (
		
		<div className="search">
			<input 
				className="searchInput" 
				type="text" 
				value={initSearchString}
				onChange={e=>changeSearchString(e.target.value.toLowerCase())}
				/> 
			<i className="fal fa-search"/>		
		</div>
		
	) 
};

export default SearchString;
