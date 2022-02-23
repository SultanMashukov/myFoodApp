import React, { useState } from 'react';
import './Counter.scss';

const Counter = ({initCount, changeCount}) => {

	

	const decrement = () => {
		changeCount( initCount - 1)
	}

	const increment = () => {
		changeCount( +initCount + 1)
	}

	
	return (
		<div className="counter">
			<button className="counter__button counter__decrement"
			onClick={decrement}>
				-
			</button>
			<input className="counter__input" type="text" value={initCount} onChange={(e) => changeCount(e.target.value)}/>    
			<button className=" counter__button counter__increment"
			onClick={increment}>
				+
			</button>
		</div>
	) 
};

export default Counter;
