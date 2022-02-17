import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = (props) => {
	return (
		<div className="main-menu">
			<div className="main-menu__row">
				<NavLink to='/' className={({ isActive }) => isActive ? 'main-menu__item main-menu__item--active' : 'main-menu__item' }>
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
					<div className="main-menu__icon">
						<i className="fal fa-shopping-basket"></i>
					</div>
				</NavLink>
			</div>
		</div>
	) 
};

export default MainMenu;
