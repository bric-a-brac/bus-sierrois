
import {Coordinate, Geo} from './geo.mjs';
import {UI} from './ui.mjs';

var stops = null;

var geo = new Geo();

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

// TODO Seulement si les arrêts de bus sont affichés !!!!!!!!!
function updateStopsDistance()
	{
	stops.forEach(stop =>
		{
		// TODO m / km
		el('#stop-' + stop.id + '-distance').textContent = stop.distance + ' m';
		});
	}

// Démarrer géolocalisation APRÈS chargement des stops !!!!!!!!!!!!!
function here()
	{
	throw new Error('Utiliser Geo');

	let onSuccess = position =>
		{
		let here = new Coordinate(position.coords.latitude, position.coords.longitude);

		//console.log(position.coords);
		//console.log(here);

		stops.forEach(stop =>
			{
			stop.distance = here.distance(stop.coordinate);
			});

		updateStopsDistance();
		};

	let onError = error =>
		{
		console.log(error);
		};

	let options =
		{
		// maximumAge : un entier qui exprime une durée en millisecondes ou l'infini pour indiquer la durée maximale pendant laquelle mettre en cache la position.
		// timeout : un entier qui exprime la durée, en millisecondes, avant que la fonction de rappel error soit appelé. Si cette propriété vaut 0, la fonction d'erreur ne sera jamais appelée.
		enableHighAccuracy: true // un booléen qui indique si une précision élevée est requise.
		};

	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	}

/////////////////////////////////////////////////////////////////////////////////////////////////
// CHARGEMENT DES DONNÉES
/////////////////////////////////////////////////////////////////////////////////////////////////

let fetchOnSuccess = json =>
	{
	stops = featuresToStops(json);

	UI.render('stops', {'stops': stops});

	// TODO try/catch ou CustomEvent
	geo.startGeoLocation(coordinate =>
		{
		//console.log(coordinate);

		stops.forEach(stop =>
			{
			// TODO m / km
			stop.distance = parseInt(Coordinate.distanceBetween(coordinate, stop.coordinate) * 1000);
			});

		updateStopsDistance();
		});
	};

let fetchOnFailure = error =>
	{
	console.error(error);
	};

fetch('bus-sierrois.json').then(response => response.json()).then(fetchOnSuccess, fetchOnFailure);


on(document.body, 'click', e =>
	{
	//document.body.classList.toggle
	el('#progress').classList.toggle('loading');
	});


// TODO Pas alert !!!!!!!!!
on(document, 'error-geolocation-permission-denied', error =>
	{
	alert('error-geolocation-permission-denied');
	});




window.addEventListener('unload', e => geo.stopGeoLocation(), false);
