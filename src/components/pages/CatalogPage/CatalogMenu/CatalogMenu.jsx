import React from 'react';
import './CatalogMenu.scss';
import { NavLink } from 'react-router-dom';



const CatalogMenu = (props) => {
	return (
		<div className="food-menu">
			<div className="food-menu__row">
				<div className="food-menu__item">
					<NavLink to='/pizza' className='food-menu__link'>
						<i className="fal fa-pizza-slice"></i>
						<div className="food-menu__item-name">Пицца</div>
					</NavLink>
					
				</div>
				<div className="food-menu__item">
					<NavLink to='/sanwiches' className='food-menu__link'>
						<i className="fal fa-sandwich"></i>
						<div className="food-menu__item-name">Сендвичи</div>
					</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/burgers' className='food-menu__link'>
							<i className="fal fa-cheeseburger"></i>
							<div className="food-menu__item-name">Бургеры</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/giros' className='food-menu__link'>
							<i className="fal fa-burrito"></i>
							<div className="food-menu__item-name">Гирос</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/bakery' className='food-menu__link'>
							<i className="fal fa-croissant"></i>
							<div className="food-menu__item-name">Выпечка</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/hotdogs' className='food-menu__link'>
							<i className="fal fa-hotdog"></i>
							<div className="food-menu__item-name">Хот-доги</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/dessert' className='food-menu__link'>
							<i className="fal fa-ice-cream"></i>
							<div className="food-menu__item-name">Десерты</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/drink' className='food-menu__link'>
							<i className="fal fa-cocktail"></i>
							<div className="food-menu__item-name">Напитки</div>
						</NavLink>
				</div>
			</div>
		</div>
	) 
};

export default CatalogMenu;
