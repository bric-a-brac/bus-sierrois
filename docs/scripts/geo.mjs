
import {UI} from './ui.mjs';

function degreesToRadians(degrees)
	{
	return degrees * Math.PI / 180;
	}

function distanceBetweenCoordinates(latitude1, longitude1, latitude2, longitude2)
	{
	//const RADIUS = 6371e3;
	const RADIUS = 6371;

	let deltaLatitude = degreesToRadians(latitude2 - latitude1);
	let deltaLongitude = degreesToRadians(longitude2 - longitude1);

	latitude1 = degreesToRadians(latitude1);
	latitude2 = degreesToRadians(latitude2);

	let a = Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) + Math.sin(deltaLongitude / 2) * Math.sin(deltaLongitude / 2) * Math.cos(latitude1) * Math.cos(latitude2);

	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return RADIUS * c;
	}

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

	startGeoLocation(callback)
		{
		let onSuccess = position =>
			{
			callback(new Coordinate(position.coords.latitude, position.coords.longitude));
			};

		let onError = error =>
			{
			console.log(error);

			// TODO Autres erreurs aussi hein ;-) !!!!!!!!!!!

			if (error.code === GeolocationPositionError.PERMISSION_DENIED)
				{
				// TODO Error
				//throw new Error('PERMISSION_DENIED');
				// Ou alors CustomEvent...
				//document.dispatchEvent(new CustomEvent('error-geolocation-permission-denied'));
				UI.dispatch('error-geolocation-permission-denied');
				}
			};

		this.watchId = navigator.geolocation.watchPosition(onSuccess, onError, {enableHighAccuracy: true});
		}

	stopGeoLocation()
		{
		if (this.watchId !== null)
			{
			navigator.geolocation.clearWatch(this.watchId);
			}
		}
	}

export {Coordinate, Geo};
