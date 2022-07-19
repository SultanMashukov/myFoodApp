import React, { useEffect, useState } from 'react';

const BasketItemMarked = ({basketId, name, restoreItem}) => {
	const [deleteTimeout, setDeleteTimeout] = useState(4);

	useEffect(() => {
		let interval;

		if(deleteTimeout > 0){
			interval  = setInterval(() => {
				setDeleteTimeout(prev => prev - 1)
			},1000)
		}
		
		return () => {
			if(interval)
				clearInterval(interval)
		}
	},[deleteTimeout])


	return (
		<div className="basket__item">
			<div className="basket__removed-item">
				<div className="basket__removed-notification">
					<div className="basket__removedText">
						<b>{name}</b> был удален.
					</div>
					<div className="basket__removedButton">
						<button className="basket__restore-btn" onClick={() => {restoreItem(basketId)}}>
							<div className="basket__removedCounter">{deleteTimeout}</div>
							<i className="fal fa-undo"></i>
						</button>
					</div>
					
				</div>
			</div>
		</div>
	) 
};

export default BasketItemMarked;