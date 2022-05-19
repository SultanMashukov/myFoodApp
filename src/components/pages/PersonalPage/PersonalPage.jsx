import React from 'react';
import { NavLink } from 'react-router-dom';
import './PersonalPage.scss';

const PersonalPage = (props) => {
	return (
		<div class="personal">
			<div class="pageHeader">
					<div class="pageHeader__title">
							Личный кабинет
					</div>
					
			</div>
			<div class="personal__row">
					<div class="personal__item">
							<a href="" class="personal__item-link">
									<span class="personal__item-icon">
											<i class="fal fa-info"></i>
									</span>Мои данные</a>
					</div>
					<div class="personal__item">
							<a href="" class="personal__item-link">
									<span class="personal__item-icon">
											<i class="far fa-map-marked"></i>
									</span>Мои адреса</a>
					</div>
					<div class="personal__item">
							<NavLink to='orders/' className='personal__item-link'>
								<span class="personal__item-icon">
									<i class="fal fa-history"></i>
								</span>Мои заказы
							</NavLink>
					</div>
					<div class="personal__item">
							<a href="" class="personal__item-link">
									<span class="personal__item-icon">
											<i class="fas fa-heart"></i>
									</span>Избранные блюда</a>
					</div>
					<div class="personal__item">
							<a href="" class="personal__item-link">
									<span class="personal__item-icon">
											<i class="fal fa-weight-hanging"></i>
									</span>Мои наборы</a>
					</div>
			</div>
		</div>
	) 
};

export default PersonalPage;
