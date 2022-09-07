import React from 'react';
import './styles.scss';

const AboutAppPage = (props) => {
	return (
		<div className="aboutApp">
			<div className="aboutApp__title">
				Информация о сайте
			</div>
			<div className="aboutApp__text">
				<div className="aboutApp__warning">
					<b>ВНИМАНИЕ!!!</b>  Верстка адаптирована только под мобильные телефоны. Рекомендую включить в отладчике браузера <b>адаптивный режим &lt;400px</b> 
				</div>
				Данный сайт был сделан с целью закрепления теоретических знании по ReactJS и сопутсвующих библиотек. Верстка делалась без дизайна "на ходу", поэтому местами есть повторяющиеся стили и прочие недочеты касающиеся html+css. Верстку можете оценить в другом проекте. <br /><br />
				<b>Ссылки на верстку:</b>
				<br /><br />
				<a className='aboutApp__link' href="https://cb98369.tmweb.ru/" target="_blank">Ознакомиться с проектом верстки</a>
				<a className='aboutApp__link' href="https://github.com/SultanMashukov/teplo" target="_blank">Репозитории проекта верстки</a>
				<br />
			</div>
			<div className="aboutApp__subtitle">
				FrontEnd
			</div>
			<ul>
				<li>React (функциональные компоненты)</li>
				<li>Redux (toolkit)</li>
				<li>axios</li>
				<li>React-transition-group</li>
				<li>React-router-dom v6</li>
				<li>Стили реализованы обычным импортом, написаны на scss</li>
			</ul>
			<div className="aboutApp__subtitle">
				BackEnd
			</div>
			<ul>
				<li>Nginx</li>
				<li>node js</li>
				<li>express js</li>
				<li>СУБД PostgreSQL</li>
				<li>В роли ORM используется Sequelize</li>
				<li>Регистрация/авторизация реализована через JWT токен</li>
			</ul>
			<a className='aboutApp__link' href="https://github.com/SultanMashukov/myFoodApp/tree/refactoring" target="_blank">Репозитории данного проекта</a>
			
		</div>
	) 
};

export default AboutAppPage;