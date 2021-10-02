
import {Coordinate} from './geo.mjs';
import {UI} from './ui.mjs';

var stops = null;

/////////////////////////////////////////////////////////////////////////////////////////////////
// VÉRIFIER COMPATIBILITÉ NAVIGATEUR
/////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////
// CHARGEMENT DES DONNÉES
/////////////////////////////////////////////////////////////////////////////////////////////////

function windowOnLoad(e)
	{
	let onSuccess = json =>
		{
		stops = featuresToStops(json);
		};

	let onFailure = error =>
		{
		console.error(error);
		};

	//let stops = fetch('data').then(response => response.json()).then(onSuccess, onFailure);
	//let ways = fetch('data').then(response => response.json()).then(onSuccess, onFailure);
	//Promise.all([stops, ways]).then(onFetch, onError);

	fetch('stops.json').then(response => response.json()).then(onSuccess, onFailure);
	}

window.addEventListener('load', windowOnLoad, false);

/////////////////////////////////////////////////////////////////////////////////////////////////
// GÉO
/////////////////////////////////////////////////////////////////////////////////////////////////

function featureToStop(feature)
	{
	let stop = {};

	stop.id = feature.properties.id;
	stop.name = feature.properties.name;
	stop.coordinate = new Coordinate(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
	stop.distance = null;

	return stop;
	}

function featuresToStops(collection)
	{
	return collection.features.map(featureToStop);
	}

function onLinesClick(e)
	{
	document.querySelector('#content').innerHTML = 'Lignes de bus';
	}

function onStopsClick(e)
	{
	e.preventDefault();

	//console.log(stops);

	//document.querySelector('#content').innerHTML = stops;
	//console.log(stops);

	UI.render('stops', stops);
	}

//document.querySelector('#lines').addEventListener('click', onLinesClick, false);
//document.querySelector('#stops').addEventListener('click', onStopsClick, false);

onClick('#stops', e =>
	{
	e.preventDefault();

	console.log(stops);

	UI.render('templates/stops-dev.njk', {'stops': stops});
	});

/*
on(el('#stops'), 'click', e =>
	{
	e.preventDefault();

	UI.render('stops', stops);
	});
*/

// TODO Démarrer géolocalisation APRÈS chargement des stops !!!!!!!!!!!!!
/*
navigator.geolocation.getCurrentPosition(position =>
	{
	let here = new Coordinate(position.coords.latitude, position.coords.longitude);

	stops.forEach(stop =>
		{
		//console.log(here.distance(stop.coordinate));
		stop.distance = here.distance(stop.coordinate);
		});
	});
*/

function onUpdateStopsDistance(e)
	{
	e.preventDefault();

	stops.forEach(stop =>
		{
		el('#stop-' + stop.id + '-distance').textContent = 4535345345;
		});
	}

onClick('#update-stops-distance', onUpdateStopsDistance);
