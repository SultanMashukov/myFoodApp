import React from 'react';
import { NavLink } from 'react-router-dom';
import './PersonalPage.scss';

const PersonalPage = (props) => {
	return (
		<div className="personal">
			<div className="pageHeader">
					<div className="pageHeader__title">
							Личный кабинет
					</div>
					
			</div>
			<div className="personal__row">
					<div className="personal__item">
							<a href="" className="personal__item-link">
									<span className="personal__item-icon">
											<i className="fal fa-info"></i>
									</span>Мои данные</a>
					</div>
					<div className="personal__item">
							<a href="" className="personal__item-link">
									<span className="personal__item-icon">
											<i className="far fa-map-marked"></i>
									</span>Мои адреса</a>
					</div>
					<div className="personal__item">
							<NavLink to='orders/' className='personal__item-link'>
								<span className="personal__item-icon">
									<i className="fal fa-history"></i>
								</span>Мои заказы
							</NavLink>
					</div>
					<div className="personal__item">
							<a href="" className="personal__item-link">
									<span className="personal__item-icon">
											<i className="fas fa-heart"></i>
									</span>Избранные блюда</a>
					</div>
					<div className="personal__item">
							<a href="" className="personal__item-link">
									<span className="personal__item-icon">
											<i className="fal fa-weight-hanging"></i>
									</span>Мои наборы</a>
					</div>
			</div>
		</div>
	) 
};

export default PersonalPage;
