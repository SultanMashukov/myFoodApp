import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

const NotFoundPage = (props) => {
	return (
		<div className="notFoundPage">
			<div className="pageHeader">
				<div className="pageHeader__title">
						Упс,ошибка :(
				</div>
			</div>
			<div className="notFoundPage__inner">
				<div className="notFoundPage__error">
					404
				</div>
				<div className="notFoundPage__text">
					<b>По вашему запросу ничего не найдено.</b> 
					<br />
					<br />
					Возможно неправильно набран адрес или страница была удалена.
				</div>
				<NavLink to='/catalog/' className="notFoundPage__link">
					В меню <i class="fal fa-utensils"></i>
				</NavLink>
			</div>
		</div>
	) 
};

export default NotFoundPage;