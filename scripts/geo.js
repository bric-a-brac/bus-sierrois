



class GeoLoc
	{
	loc()
		{
		navigator.geolocation.getCurrentPosition(position =>
			{
			console.log(position);
			//faireQqc(position.coords.latitude, position.coords.longitude);
			});
		}
	}


var geoloc = new GeoLoc();
geoloc.loc();




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
const R = 6371e3; // metres
const φ1 = lat1 * Math.PI/180; // φ, λ in radians
const φ2 = lat2 * Math.PI/180;
const Δφ = (lat2-lat1) * Math.PI/180;
const Δλ = (lon2-lon1) * Math.PI/180;

const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

const d = R * c; // in metres
*/

//const A = Math.PI / 180;

/*const Geo =*/ class Geo
	{
	degreesToRadians(degrees)
		{
		return degrees * Math.PI / 180;
		}

	distanceBetweenCoordinates(latitude1, longitude1, latitude2, longitude2)
		{
		let dLat = (latitude2 - latitude1).toRadians();
		let dLon = (longitude2 - longitude1).toRadians();

		latitude1 = latitude1.toRadians();
		latitude2 = latitude2.toRadians();
		}
	};

if (Number.prototype.toRadians === undefined)
	{
	Number.prototype.toRadians = function()
		{
		return this * (Math.PI / 180);
		};
	}

//Number.prototype.toRad = function() { return this * (Math.PI / 180); };

function degreesToRadians(degrees)
	{
	return degrees * Math.PI / 180;
	}

var aaa = 45;
console.log(degreesToRadians(aaa));
console.log(aaa.toRadians());
console.log((50 - 5).toRadians());

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2)
	{
	//var earthRadiusKm = 6371;
	const earthRadiusKm = 6371e3;

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
