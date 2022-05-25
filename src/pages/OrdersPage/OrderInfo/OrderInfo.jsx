import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition} from 'react-transition-group';
import OrderDetail from './OrderDetail/OrderDetail';
import './OrderInfo.scss';

const OrderInfo = (props) => {
	const currentDetail = useSelector(state => state.orders.currentDetailInfo);
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
