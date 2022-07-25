import React from 'react';
import successIcon from 'assets/images/success-svgrepo-com.svg'
const SuccessPopup = (props) => {
	return (
		<div className="basket__success">
			<div className="basket__successIcon">
				<img src={successIcon} alt="" />
			</div>
			<div className="basket__successText">
				Представим, что произошла успешная оплата
			</div>
		</div>
	) 
};

export default SuccessPopup;