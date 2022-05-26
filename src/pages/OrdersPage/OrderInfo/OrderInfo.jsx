import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition} from 'react-transition-group';
import { toggleModal } from 'store/slices/sliceOrders';
import OrderDetail from './OrderDetail/OrderDetail';
import './OrderInfo.scss';

const OrderInfo = (props) => {
	const dispatch = useDispatch();
	const currentDetail = useSelector(state => state.orders.currentDetailInfo);

	useEffect(()=>{
		return ()=> {
			dispatch(toggleModal('off')) //закрытие деталки при покидайнии страницы
		}
	},[])

	return (
		<>
		<CSSTransition	
				timeout={300}
				in={currentDetail.showComponent}
				classNames='orderDetailAnim'
				mountOnEnter
				unmountOnExit>
					<OrderDetail orderId={currentDetail.id}/> 
			</CSSTransition>
		</>
	) 
};

export default OrderInfo;
