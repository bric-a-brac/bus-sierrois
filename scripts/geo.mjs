
function degreesToRadians(degrees)
	{
	return degrees * Math.PI / 180;
	}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2)
	{
	var earthRadiusKm = 6371;
	//const earthRadiusKm = 6371e3;

	var dLat = degreesToRadians(lat2 - lat1);
	let dLon = degreesToRadians(lon2 - lon1);
	lat1 = degreesToRadians(lat1);
	lat2 = degreesToRadians(lat2);

	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return earthRadiusKm * c;
	}

function distanceBetweenCoordinates(lat1, lon1, lat2, lon2)
	{
	return distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2);
	}

export class Geo
	{
	constructor()
		{
		this.watchId = null;
		}

	distance(lat1, lon1, lat2, lon2)
		{
		return distanceBetweenCoordinates(lat1, lon1, lat2, lon2);
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
