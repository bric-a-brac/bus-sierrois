
function degreesToRadians(degrees)
	{
	return degrees * Math.PI / 180;
	}

function distanceBetweenCoordinates(latitude1, longitude1, latitude2, longitude2)
	{
	const RADIUS = 6371e3;

	let deltaLatitude = degreesToRadians(latitude2 - latitude1);
	let deltaLongitude = degreesToRadians(longitude2 - longitude1);

	latitude1 = degreesToRadians(latitude1);
	latitude2 = degreesToRadians(latitude2);

	let a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) + Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2) * Math.cos(latitude1) * Math.cos(latitude2);

	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return RADIUS * c;
	}

/**
 * @version 0.1.0
 * @since 0.1.0
 */
class Coordinate
	{
	constructor(latitude, longitude)
		{
		this.latitude = latitude;
		this.longitude = longitude;
		}

	distance(coordinate)
		{
		return Coordinate.distanceBetween(this, coordinate);
		}

	static distanceBetween(coordinate1, coordinate2)
		{
		return distanceBetweenCoordinates(coordinate1.latitude, coordinate1.longitude, coordinate2.latitude, coordinate2.longitude);
		}
	}

class Geo
	{
	constructor()
		{
		this.watchId = null;
		}

	startGeoLocation()
		{
		/*
var options =
	{
	enableHighAccuracy: true,
	maximumAge: 30000,
	timeout: 27000
	};
*/

		let onSuccess = function(position)
			{
			// TODO new Coordinate()
			let coordinate = {latitude: position.coords.latitude, longitude: position.coords.longitude};

			window.document.dispatchEvent(new CustomEvent('geo-coordinate', {detail: coordinate}));
			};

		let onError = function(error)
			{
			//console.error(error);
			};
		
		this.watchId = window.navigator.geolocation.watchPosition(onSuccess, onError, {enableHighAccuracy: true});
		}

	stopGeoLocation()
		{
		if (this.watchId !== null)
			{
			window.navigator.geolocation.clearWatch(this.watchId);
			}
		}
	};

export {Coordinate, Geo};
