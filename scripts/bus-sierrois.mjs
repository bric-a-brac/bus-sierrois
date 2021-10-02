/**
 * @version 0.1.0
 * @since 0.1.0
 */
class BusSierrois extends EventTarget
	{
	constructor()
		{
		super();

		this.stops = null;

		fetch('stops.json').then(response => response.json()).then(json =>
			{
			let event = new CustomEvent('stops', {detail: json});

			//let cancelled = !this.dispatchEvent(event);
			this.dispatchEvent(event);
			});

		//this.addEventListener('stops', this.onStops, false);
		}

	/*
	async load()
		{
		const response = await window.fetch('sdfdf');
		return await response.json();
		}
	*/

	/**
	 * @returns Promise
	 */
	async load2()
		{
		//console.log(this.stops);

		if (this.stops === null)
			{
			//console.log('load stops');

			let response = await window.fetch('stops.json');

			this.stops = await response.json();
			}

		return this.stops;
		}

	async load()
		{
		if (this.stops === null)
			{
			console.log('Load Stops');

			const response = await fetch('stops.json');

			this.json = await response.json();

			//const json = await response.json();
			//console.log(json.then);
			}

		return new Promise((resolve, reject) =>
			{
			resolve(this.json);
			});
		}

	onStops(e)
		{
		console.log('BS.onStops');
		}
	}

export {BusSierrois};
