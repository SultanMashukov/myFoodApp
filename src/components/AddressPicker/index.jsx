import React, {useEffect, useState} from 'react';
import './styles.scss';

const AddressPicker = ({initCoord, initAddrString, closeFunc, saveNewLocation}) => {
	const startCoord = initCoord;
	const [currentAddress, setCurrentAddress] = useState({coord: [], string: ''})

	//Код в этом useEffect отвечает за отрисовку карты, и привязу к кнопок
	useEffect(()=>{
		if(window.ymaps){
			const ymaps = window.ymaps;
			ymaps.ready(() => {
				let myMap = new ymaps.Map("addresspickermap", {
					center: [55.755819, 37.617644],
					zoom: 16,
				});
				const suggestView = new ymaps.SuggestView('suggest');
				suggestView.events.add("select", function(e) {
					setLocation(e.get('item').value)
				}) 
				document.getElementById('findme').addEventListener('click', getGeoposition)

				
				if(startCoord){
					let initPlacemark = new ymaps.Placemark(
						startCoord,
						{preset: "islands#redDotIcon",}
					);
					myMap.geoObjects.add(initPlacemark);
					myMap.setCenter(startCoord)
				}

				
				async function setLocation (addressString){
					let geocoder = await ymaps.geocode(addressString);
					let coordinates = geocoder.geoObjects.get(0).geometry.getCoordinates();
					let placemark = new ymaps.Placemark(
						coordinates,
						{
							preset: "islands#redDotIcon",
						}
					);
					myMap.geoObjects.add(placemark);
					myMap.setCenter(coordinates)
					setCurrentAddress({
						...currentAddress, 
						coord: coordinates, 
						string:'221'
					})
				}
	
				function getGeoposition() {
					ymaps.geolocation.get({
						provider: 'browser',
						mapStateAutoApply: true
					}).then(function (result) {
						let geoObj = result.geoObjects.get(0);
						let addressString = geoObj.getAddressLine();
						myMap.geoObjects.add(result.geoObjects);
						document.getElementById('suggest').value = addressString;
						setCurrentAddress({
							...currentAddress,
							coord:geoObj.geometry.getCoordinates(), 
							string:addressString
						});
					});
				}
			});
		}
	},[startCoord])


	const saveAndClose = () => {
		saveNewLocation(currentAddress.coord, currentAddress.string);
		closeFunc(mapStatus => !mapStatus)
	}
	
	return (
		<div className="addressPicker">
			<div  id="addresspickermap" className="addressPicker__mapContainer"></div>
			<div className="addressPicker__controls">
				<div className="addressPicker__close" onClick={() => closeFunc(mapStatus => !mapStatus)}>
					<i className="fal fa-times"></i>
				</div>
				<div className="addressPicker__controlsTitle">Выберите адрес доставки</div>
				<input className="addressPicker__controlsSuggest" type="text" id="suggest" placeholder="или введите адрес вручную..."/>
				<button className="addressPicker__controlsBtn" id="findme">
					Автоопределение <i className="far fa-location"></i>
				</button> 
				
				<button className="addressPicker__controlsBtn addressPicker__doneBtn" 
					disabled={currentAddress.coord.length < 2} 
					onClick={saveAndClose}>
					Готово <i className="fal fa-check"></i>
				</button>
			</div>
		</div>
	) 
};

export default AddressPicker;
