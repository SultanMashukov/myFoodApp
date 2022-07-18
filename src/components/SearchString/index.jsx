import React from 'react';
import './styles.scss';

const SearchString = ({changeRefVal,initSearchString,refProp}) => {

	return (
			
		<div className="search">
			<input 
				className="searchInput" 
				type="text" 
				ref={refProp}
				placeholder="Поиск по названию..."
				onChange={e=>changeRefVal(e.target.value.toLowerCase())}
				/>
			<div className="searchIcon">
				<i className="fal fa-search"/>		
			</div>
		</div>
		
	)
}

export default SearchString;
