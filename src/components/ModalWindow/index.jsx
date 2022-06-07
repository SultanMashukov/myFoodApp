import React from 'react';
import './styles.scss';

const ModalWindow = ({active, setActive, children}) => {
	return (
		<div className={ active ? 'modal modal--active' : 'modal' } onClick={(e) =>{
			if(e.target === e.currentTarget)
				setActive(false);
		}}>
			<div className={active ? 'modal__content modal__content--active' : 'modal__content'}>
				{children}
			</div>
		</div>
	) 
};
export default ModalWindow;
