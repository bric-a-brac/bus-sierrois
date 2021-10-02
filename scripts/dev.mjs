
import {Analytics} from './who.mjs';
import {BusSierrois} from './bus-sierrois.mjs';
import {Coordinate} from './geo.mjs';
import {UI} from './ui.mjs';

//Analytics.send();
//Analytics.sendOnUnload();

function elapsedInactivityTime()
	{
	};

let bs = new BusSierrois();

let onStops = e =>
	{
	//console.log('bs.evt');
	//console.log(e.detail);

	let names = e.detail.features.map(feature => feature.properties.name);
	console.log(names);
	console.log(names.sort());
	};

bs.addEventListener('stops', onStops, false);

bs.load().then(collection =>
	{
	UI.render('stops.njk', collection);

	/*
	let origin = collection.features[0].geometry.coordinates;

	let coordinate = new Coordinate(origin[1], origin[0]);

	collection.features.forEach(feature =>
		{
		let coords = feature.geometry.coordinates;

		let coord = new Coordinate(coords[1], coords[0]);

		//console.log(coordinate.distance(coord));
		});
	*/
	});

bs.load().then(ddd => {});

let bs2 = new BusSierrois();

bs2.load().then(ddd => {});
bs2.load().then(ddd => {});

/*
//Latitude de Sierre	46.2941311
//Longitude de Sierre	7.5335362

// 229.46506575596112
let tours = new Coordinate(46.28372422, 7.51852708);
let glariers = new Coordinate(46.28558224, 7.51982644);
let d = tours.distance(glariers);
*/
