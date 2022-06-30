import React from 'react';
import './styles.scss'
import svgIcon from './oval.svg'
const FetchLoadSpinner = (props) => {
	return (
		<div className="fetchLoader">
			<img src={svgIcon} alt="" />
		</div>
	) 
};

export default FetchLoadSpinner;