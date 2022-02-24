import React from 'react';
import './LoaderSpinner.scss';
import pizzaImg from '../../../images/loader_pizza_static.png'

const LoaderSpinner = (props) => {
	return (
		<div className="loader">
			<div className="loader__inner">
				<img className="loader__image" src={pizzaImg} alt=""/>
				<div className="loader__text">
					Загрузка...
				</div>
			</div>
		</div>
	)
};

export default LoaderSpinner;
