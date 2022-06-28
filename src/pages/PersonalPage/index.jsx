import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const PersonalPage = (props) => {

	const userData = useSelector(state => state.user);
	console.log(userData);
	return (
		<div className="personal">
			<div className="pageHeader">
				<div className="pageHeader__title">
						Личный кабинет
				</div>
			</div>
			<div className="userInfo">
				<div className="userInfo__row">
					<div className="userInfo__item">
						<div className="userInfo__userName">
							{userData.name}
						</div>
					</div>
					<div className="userInfo__item">
						<div className="userInfo__userEmail">
							<i className="far fa-envelope"></i> {userData.email}
						</div>
					</div>
					<div className="userInfo__item">
						<div className="userInfo__userPhone">
							<i className="fal fa-phone"></i> +7 928 324 12 21{userData.phone}
						</div>
					</div>
					<div className="userInfo__item">
						<div className="userInfo__userAddress">
							<i className="fal fa-map-marker-check"></i> ул.Такая то лкы 12
						</div>
					</div>
				</div>
			</div>
			<div className="personal__row">
					<div className="personal__item">
						<a href="" className="personal__itemLink">
							<div className="personal__itemIcon">
								<i className="fal fa-edit"></i>
							</div>
							<div className="personal__itemName">
								Редактировать профиль
							</div>
						</a>
					</div>
					<div className="personal__item">
						<a href="" className="personal__itemLink">
							<div className="personal__itemIcon">
								<i className="far fa-map-marked"></i>
							</div>
							<div className="personal__itemName">
								Мои адреса
							</div>
						</a>
					</div>
					<div className="personal__item">
						<NavLink to='orders/' className='personal__itemLink'>
							<div className="personal__itemIcon">
								<i className="fal fa-history"></i>
							</div>
							<div className="personal__itemName">
								Мои заказы
							</div>
						</NavLink>
					</div>
					<div className="personal__item">
						<a href="" className="personal__itemLink">
							<div className="personal__itemIcon">
								<i className="far fa-heart"></i>
							</div>
							<div className="personal__itemName">
								Избранные блюда
							</div>
						</a>
					</div>
					<div className="personal__item">
						<a href="" className="personal__itemLink">
							<div className="personal__itemIcon">
								<i className="fal fa-weight-hanging"></i>
							</div>
							<div className="personal__itemName">
								Мои наборы
							</div>
						</a>
					</div>
					<div className="personal__item">
						<a href="" className="personal__itemLink">
							<div className="personal__itemIcon">
								<i className="fal fa-info-circle"></i> <i className="fab fa-react"></i>
							</div>
							<div className="personal__itemName">
								Информация о сайте
							</div>
						</a>
					</div>
			</div>
		</div>
	) 
};

export default PersonalPage;
