import React from 'react';
import { CSSTransition} from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import BasketItemChanger from './BasketItemChanger';
import { toggleModal } from 'store/slices/sliceBasket';

const BasketChanger = (props) => {
	const dispatch = useDispatch()
	const modalInfo = useSelector(state => state.basket.modalInfo);
	
	const closeChanger = () => {
		dispatch(toggleModal('N'))
	}

	return (
		<>
			<CSSTransition
				timeout={300}
				in={modalInfo.modalIsActive}
				classNames='product-modal'
				mountOnEnter
				unmountOnExit>
					{<BasketItemChanger 
						productId={modalInfo.productId} 
						basketItemId={modalInfo.basketItemId} 
						closeChanger={closeChanger}/> }
			</CSSTransition>
		</>
	) 
};

export default BasketChanger;
