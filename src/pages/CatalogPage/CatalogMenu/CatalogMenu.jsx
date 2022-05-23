import React from 'react';
import './CatalogMenu.scss';
import { NavLink } from 'react-router-dom';

const CatalogMenu = (props) => {
	
	return (
		<div className="food-menu">
			<div className="food-menu__row">
				<div className="food-menu__item">
					<NavLink to='/catalog/pizza' className='food-menu__link'>
						<i className="fal fa-pizza-slice"></i>
						<div className="food-menu__item-name">Пицца</div>
					</NavLink>
					
				</div>
				<div className="food-menu__item">
					<NavLink to='/catalog/sanwiches' className='food-menu__link'>
						<i className="fal fa-sandwich"></i>
						<div className="food-menu__item-name">Сендвичи</div>
					</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/catalog/burgers' className='food-menu__link'>
							<i className="fal fa-cheeseburger"></i>
							<div className="food-menu__item-name">Бургеры</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/catalog/giros' className='food-menu__link'>
							<i className="fal fa-burrito"></i>
							<div className="food-menu__item-name">Гирос</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/catalog/bakery' className='food-menu__link'>
							<i className="fal fa-croissant"></i>
							<div className="food-menu__item-name">Выпечка</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/catalog/hotdogs' className='food-menu__link'>
							<i className="fal fa-hotdog"></i>
							<div className="food-menu__item-name">Хот-доги</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/catalog/dessert' className='food-menu__link'>
							<i className="fal fa-ice-cream"></i>
							<div className="food-menu__item-name">Десерты</div>
						</NavLink>
				</div>
				<div className="food-menu__item">
						<NavLink to='/catalog/drink' className='food-menu__link'>
							<i className="fal fa-cocktail"></i>
							<div className="food-menu__item-name">Напитки</div>
						</NavLink>
				</div>
			</div>
		</div>
	) 
};

export default React.memo(CatalogMenu);
