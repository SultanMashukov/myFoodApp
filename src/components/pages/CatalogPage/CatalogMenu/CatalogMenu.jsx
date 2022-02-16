import React from 'react';
import './CatalogMenu.css';

const CatalogMenu = (props) => {
	return (
		<div className="food-menu">
			<div className="food-menu__row">
				<div className="food-menu__item">
					<a href="#" className="food-menu__link">
						<i className="fal fa-pizza-slice"></i>
						<div className="food-menu__item-name">Пицца</div>
					</a>
				</div>
				<div className="food-menu__item">
					<a href="#" className="food-menu__link">
						<i className="fal fa-sandwich"></i>
						<div className="food-menu__item-name">Сендвичи</div>
					</a>
				</div>
				<div className="food-menu__item">
					<a href="#" className="food-menu__link">
						<i className="fal fa-cheeseburger"></i>
						<div className="food-menu__item-name">Бургеры</div>
					</a>
				</div>
				<div className="food-menu__item">
					<a href="#" className="food-menu__link">
						<i className="fal fa-burrito"></i>
						<div className="food-menu__item-name">Гирос</div>
					</a>
				</div>
				<div className="food-menu__item">
					<a href="#" className="food-menu__link">
						<i className="fal fa-croissant"></i>
						<div className="food-menu__item-name">Выпечка</div>
					</a>
				</div>
				<div className="food-menu__item">
					<a href="#" className="food-menu__link">
						<i className="fal fa-hotdog"></i>
						<div className="food-menu__item-name">Хот-доги</div>
					</a>
				</div>
				<div className="food-menu__item">
					<a href="#" className="food-menu__link">
						<i className="fal fa-ice-cream"></i>
						<div className="food-menu__item-name">Десерты</div>
					</a>
				</div>
				<div className="food-menu__item">
					<a href="#" className="food-menu__link">
						<i className="fal fa-cocktail"></i>
						<div className="food-menu__item-name">Напитки</div>
					</a>
				</div>
			</div>
		</div>
	) 
};

export default CatalogMenu;
