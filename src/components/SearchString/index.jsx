import React from 'react';
import './styles.scss';

const SearchString = ({changeSearchString, initSearchString}) => {
	return (
		
		<div className="search">
			<input 
				className="searchInput" 
				type="text" 
				value={initSearchString}
				placeholder="Поиск по названию..."
				onChange={e=>changeSearchString(e.target.value.toLowerCase())}
				/>
			<div className="searchIcon">
				<i className="fal fa-search"/>		
			</div>
		</div>
		
	) 
};

export default SearchString;
