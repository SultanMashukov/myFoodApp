import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useSelector } from 'react-redux';

const MainMenu = (props) => {

	const basketElements = useSelector(state => state.basket.basketItems);
	const totalCount = basketElements.reduce((prev, cur) => {
		return prev + +cur.count
	},0)

	return (
		<div className="main-menu">
			<div className="main-menu__row">
				<NavLink to='/catalog' className={({ isActive }) => isActive ? 'main-menu__item main-menu__item--active' : 'main-menu__item' }>
					<div className="main-menu__icon">
						<i className="fal fa-burger-soda"></i>
					</div>
				</NavLink>
				<NavLink to='/personal' className={({ isActive }) => isActive ? 'main-menu__item main-menu__item--active' : 'main-menu__item' }>
					<div className="main-menu__icon">
						<i className="fal fa-user"></i>
					</div>
				</NavLink>
				<NavLink to='/basket' className={({ isActive }) => isActive ? 'main-menu__item main-menu__item--active' : 'main-menu__item' }>
					<div className="main-menu__counter">
						{totalCount}
					</div>
					<div className="main-menu__icon">
						<i className="fal fa-shopping-basket"></i>
					</div>
				</NavLink>
				<NavLink to='/about' className={({ isActive }) => isActive ? 'main-menu__item main-menu__item--active' : 'main-menu__item' }>
					<div className="main-menu__icon">
						<i className="fab fa-react"></i>
					</div>
				</NavLink>
			</div>
		</div>
	) 
};

export default MainMenu;
