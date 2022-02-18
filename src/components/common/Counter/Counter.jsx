import React, { useState } from 'react';
import './Counter.scss';

const Counter = ({initCount}) => {

	const [count, setCount] = useState( initCount || 1);

	const decrement = () => {
		setCount((prev) => prev - 1)
	}

	const increment = () => {
		setCount((prev) => prev + 1)
	}

	
	return (
		<div className="counter">
			<button className="counter__button counter__decrement"
			onClick={decrement}>
				-
			</button>
			<input className="counter__input" type="number" value={count}/>    
			<button className=" counter__button counter__increment"
			onClick={increment}>
				+
			</button>
		</div>
	) 
};

export default Counter;
