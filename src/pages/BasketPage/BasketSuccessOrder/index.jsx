import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition} from 'react-transition-group';
import SuccessPopup from './SuccessPopup';

const BasketSuccessOrder = (props) => {
	const isSuccess = useSelector(state => state.basket.isSuccess)
	return (
		<>
			<CSSTransition
				timeout={300}
				in={isSuccess}
				classNames='product-modal'
				mountOnEnter
				unmountOnExit>
					{<SuccessPopup/>}
			</CSSTransition>
		</>
	) 
};

export default BasketSuccessOrder;