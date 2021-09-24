
//import {BusSierrois} from './bs.mjs';
//(new BusSierrois()).dev();

import {Geo} from './geo.mjs';

const geo = new Geo();

let stops = null;

function onGeoCoordinate(e)
	{
	//console.log(e.detail.latitude + ', ' + e.detail.longitude);

	if (stops === null)
		{
		return;
		}

	let debug = '';

	stops.forEach(stop =>
		{
		//console.log(stop.coordinate.latitude + ', ' + stop.coordinate.longitude);

		let distance = geo.distance(e.detail.latitude, e.detail.longitude, stop.coordinate.latitude, stop.coordinate.longitude);

		debug += stop.name + ': ' + distance.toFixed(2) + ' (km??)<br/>';
		//debug += stop.name + ': ' + geo.dist(e.detail.longitude, e.detail.latitude, stop.coordinate.latitude, stop.coordinate.longitude) + '<br/>';
		//debug += stop.name + ': ' + geo.dist(stop.coordinate.latitude, stop.coordinate.longitude, e.detail.latitude, e.detail.longitude) + '<br/>';
		});

	window.document.querySelector('#content').innerHTML = debug;
	}

window.document.addEventListener('geo-coordinate', onGeoCoordinate, false);

geo.startGeoLocation();
//setTimeout(() => geo.stopGeoLocation(), 5000);

//setTimeout(() => console.log(stops), 3000);

fetch('../stops.json').then(response => response.json()).then(json =>
	{
	stops = [];

	json.features.forEach(feature =>
		{
		// lat <--> lon !!!!!
		//stops.push({name: feature.properties.name, coordinate: {latitude: feature.geometry.coordinates[0], longitude: feature.geometry.coordinates[1]}});
		stops.push({name: feature.properties.name, coordinate: {latitude: feature.geometry.coordinates[1], longitude: feature.geometry.coordinates[0]}});
		});
	});
