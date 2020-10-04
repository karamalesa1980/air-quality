import React, {useEffect, useRef, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import './AirQuality.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
//added a link to my map
mapboxgl.accessToken = 'pk.eyJ1IjoiY3IwdzFleXkiLCJhIjoiY2tmcDAzNzluMGQydDJ5cGEydnVjdHN0aiJ9.s7CUaCjhKQvH1P9zkqzjKw';

const AirQuality = () => {
	const mapContainer = useRef(null);
	//locationInfo
	const [locationInfo] = useState({
		lng: 31,
		lat: 48.3,
		zoom: 5
	});
	//add useEffect
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/outdoors-v11',
			center: [locationInfo.lng, locationInfo.lat],
			zoom: locationInfo.zoom
		});
	}, [])
	//name classes air-q
	return (
		<section className="air-q container" id="maps">
			<h2 className="air-q-title" id="quality">Индекс качества воздуха в режиме реального времени</h2>
			
			<div className="air-q-map" ref={mapContainer}/>
			
			<p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
		</section>
	);
};

export default AirQuality;