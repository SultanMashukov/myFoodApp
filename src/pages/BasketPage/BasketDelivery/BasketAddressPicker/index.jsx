import React, { useState } from 'react';
import AddressPicker from 'components/AddressPicker';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { setAddress } from 'store/slices/sliceUser';

const BasketAddressPicker = (props) => {

	const dispatch = useDispatch();
	const userAdderssInfo = useSelector(state => state.user.address);
	const [mapStatus, setMapStatus] = useState(false);
	
	const saveLocation = (coord, string) => {
		dispatch(setAddress({coord,string}))
	}


	return (
		<>
			<div className="basketAddressPicker" onClick={(e) => setMapStatus(mapStatus => !mapStatus)}>
				<div className="basketAddressPicker__addr">
					<div className="basketAddressPicker__addrIcon"><i className="fal fa-map-marker-alt"></i></div> 
					{
						userAdderssInfo.string && userAdderssInfo.coord
							? <div className="basketAddressPicker__addrText"><b>Адрес доставки: </b> {userAdderssInfo.string}</div>
							: <div className="basketAddressPicker__addrText">Укажите адрес доставки...</div>
					}
					
					
				</div>
				<div className="basketAddressPicker__addrEditBtn">
					<i className="far fa-location"></i>
				</div>
			</div>
			<CSSTransition
				timeout={300}
				in={mapStatus}
				classNames='product-modal'
				mountOnEnter
				unmountOnExit>
					<AddressPicker 
						initCoord = {userAdderssInfo.coord} 
						initAddrString={userAdderssInfo.string}
						closeFunc={setMapStatus}
						saveNewLocation={saveLocation}/>
			</CSSTransition>
		</>
		
	) 
};

export default BasketAddressPicker;
