import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import UserInfo from './UserInfo';
import { useDispatch } from 'react-redux';
import { toggleEditMode } from 'store/slices/sliceUser';

const PersonalPage = (props) => {
	
	const dispatch = useDispatch();
	const setEditMode = (val) => {
		dispatch(toggleEditMode(val))
	}

	return (
		<div className="personal">
			<div className="pageHeader">
				<div className="pageHeader__title">
						Личный кабинет
				</div>
			</div>
			<UserInfo/>
			<div className="personal__row">
					<div className="personal__item">
						<div className="personal__itemLink" onClick={()=> setEditMode('on')}>
							<div className="personal__itemIcon">
								<i className="fal fa-edit"></i>
							</div>
							<div className="personal__itemName">
								Редактировать профиль
							</div>
						</div>
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
						<NavLink to="/catalog/?favorites" className="personal__itemLink">
							<div className="personal__itemIcon">
								<i className="far fa-heart"></i>
							</div>
							<div className="personal__itemName">
								Избранные блюда
							</div>
						</NavLink>
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
					<div className="personal__item personal__item--disabled" >
						<a href="" className="personal__itemLink">
							<div className="personal__itemIcon">
								<i className="fal fa-weight-hanging"></i>
							</div>
							<div className="personal__itemName">
								Мои наборы
							</div>
						</a>
					</div>
					<div className="personal__item personal__item--disabled">
						<a href="" className="personal__itemLink">
							<div className="personal__itemIcon">
								<i className="far fa-map-marked"></i>
							</div>
							<div className="personal__itemName">
								Мои адреса
							</div>
						</a>
					</div>
			</div>
		</div>
	) 
};

export default PersonalPage;
