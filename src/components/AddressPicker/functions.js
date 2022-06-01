//Если карты не подлкючены в шапке html, то завершить скрипт
if(!window.ymaps)
    throw(new Error('Yandex maps not conneted in header'));

const ymaps = window.ymaps;

export function initMap(wrapId){
    let mapObj = null;
    ymaps.ready(()=>{
        mapObj = new ymaps.Map(wrapId, {
            center: [55.755819, 37.617644],
            zoom: 16,
        });
        return mapObj;
    })
    
}

export async function setLocationByString(addressString, mapObj){
    let geocoder = await ymaps.geocode(addressString);
    let coordinates = geocoder.geoObjects.get(0).geometry.getCoordinates();
    let placemark = new ymaps.Placemark(
        coordinates,
        {
            preset: "islands#redDotIcon",
        }
    );
    mapObj.geoObjects.add(placemark);
    mapObj.setCenter(coordinates);
}

export function getGeoposition(mapObj) {
    ymaps.geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        let geoObj = result.geoObjects.get(0);
        let addressString = geoObj.getAddressLine();
        mapObj.geoObjects.add(result.geoObjects);
        document.getElementById('suggest').value = addressString;
    });
}

export function suggestView(inputid, mapObj){
    let suggestView = null;
    ymaps.ready( () => {
        suggestView = new ymaps.SuggestView(inputid);
        suggestView.events.add("select", function(e) {
			setLocationByString(e.get('item').value, mapObj)
		}) 
        return suggestView;
    })
}

//ВЫЗОВ В USEEFFECT
// const map = initMap('addresspickermap');
// const suggestInput = suggestView('suggest', map); 


export default ymaps;