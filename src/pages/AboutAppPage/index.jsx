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
					<b>ВНИМАНИЕ!!!</b>  Верстка адаптированна только под мобильные телефоны. Рекомендую включить в отладчике браузера <b>адаптивный режим >400px</b> 
				</div>
				Данный сайт был сделан с целью закрепления теоретических знании по ReactJS и сопутсвующих библиотек. Верстка делалась без дизайна "на ходу", поэтому местами есть повторяющиеся стили прочие небольшие недочеты.
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
			</ul>
		</div>
	) 
};

export default AboutAppPage;