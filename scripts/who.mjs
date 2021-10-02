
// analytics.js bloqué par extension Firefox (AdBlock je suppose)

function dnt()
	{
	if ('doNotTrack' in navigator)
		{
		return navigator.doNotTrack !== '1';
		}

	return true;
	}

function collect()
	{
	let data = {};

	data.lang = navigator.language;
	data.ua = navigator.userAgent;

	//return JSON.stringify(data);
	return '{}';
	}

class Analytics
	{
	static send()
		{
		//console.log('Analytics');

		if ('sendBeacon' in navigator)
			{
			if (dnt())
				{
				//console.log('sendBeacon');
				navigator.sendBeacon('/log', collect());
				//let r = navigator.sendBeacon('/log');
				//console.log(r);
				}
			}
		}

	static sendOnUnload()
		{
		document.addEventListener('visibilitychange', () =>
			{
			if (document.visibilityState === 'hidden')
				{
				//navigator.sendBeacon('/log', analyticsData);
				Analytics.send();
				}
			});
		}
	};

export {Analytics};
