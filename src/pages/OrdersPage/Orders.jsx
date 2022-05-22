import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import OrderDetail from './OrderDetail/OrderDetail';
import './Orders.scss';
import OrdersList from './OrdersList/OrdersList';
import { CSSTransition} from 'react-transition-group';
import { toggleModal, setCurrentDetailId } from '../../../store/slices/sliceOrders';

const Orders = (props) => {
	const dispatch = useDispatch();
	const ordersData = useSelector(state => state.orders);
	
	const toggleDetailOrder = (currentDetailId)=>{
		if(ordersData.currentDetailId)
			dispatch(setCurrentDetailId({currentDetailId:''}))
		dispatch(setCurrentDetailId({currentDetailId}))
		dispatch(toggleModal());
		
	}
	
	return (
		<div className="orders">
			<div className="pageHeader">
				<NavLink to='/personal/' className='pageHeader__back'>
					<i className="far fa-arrow-left"></i>
				</NavLink>
				<div className="pageHeader__title">
						История заказов
				</div>
			</div>
			<OrdersList toggleDetailOrder={toggleDetailOrder}/>
			<CSSTransition	
				timeout={300}
				in={ordersData.modalIsActive}
				classNames='basket__item'
				mountOnEnter
				unmountOnExit>
					<OrderDetail orderData={ordersData.ordersList.find(el => el.id === ordersData.currentDetailId)}/>
			</CSSTransition>
		</div>
	) 
};

export default Orders;
