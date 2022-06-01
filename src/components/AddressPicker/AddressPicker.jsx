import React, {useEffect, useState} from 'react';
import './AddressPicker.scss';

const AddressPicker = (props) => {
	//Код в этом useEffect отвечает за отрисовку карты, и привязу к кнопок
	useEffect(()=>{
		if(window.ymaps){
			const ymaps = window.ymaps
			// ymaps.ready(init);
			function init() {
				var myMap = new ymaps.Map("addresspickermap", {
					center: [55.755819, 37.617644],
					zoom: 16,
				});
				
				const setLocation = async (addressString) => {
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
					setCurrentCoords(coordinates)
				}
	
				const getGeoposition = () => {
					ymaps.geolocation.get({
						provider: 'browser',
						mapStateAutoApply: true
					}).then(function (result) {
						let geoObj = result.geoObjects.get(0);
						let addressString = geoObj.getAddressLine();
						myMap.geoObjects.add(result.geoObjects);
						document.getElementById('suggest').value = addressString;
						setCurrentCoords(geoObj.geometry.getCoordinates());
					});
				}
	
	
				const suggestView = new ymaps.SuggestView('suggest');
				suggestView.events.add("select", function(e) {
					setLocation(e.get('item').value)
				}) 
				document.getElementById('findme').addEventListener('click', () => {
					getGeoposition();
				})
			}
		}
	},[])

	const [currentCoords, setCurrentCoords] = useState([])
	
	return (
		<div className="addressPicker">
			<div id="addresspickermap" className="addressPicker__mapContainer"></div>
			<div className="addressPicker__controls">
				<div className="addressPicker__close">
					<i className="fal fa-times"></i>
				</div>
				<div className="addressPicker__controlsTitle">Выберите адрес доставки</div>
				<button className="addressPicker__controlsBtn" id="findme">
					Автоопределение <i className="far fa-location"></i>
				</button> 
				<input className="addressPicker__controlsSuggest" type="text" id="suggest" placeholder="или введите адрес вручную..."/>
				<button className="addressPicker__controlsBtn addressPicker__doneBtn" disabled={currentCoords.length < 2}>
					Готово <i className="fal fa-check"></i>
				</button>
			</div>
		</div>
	) 
};

export default AddressPicker;
