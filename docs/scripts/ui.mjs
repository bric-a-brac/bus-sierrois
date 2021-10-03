
class UI
	{
	/*
	async ui()
		{
		let response = await fetch('sdsdsd');

		let json = await response.json();

		// tranform

		return new Promise((resolve, _reject) =>
			{
			resolve(json);
			});
		}
	*/

	// TODO Passer Init
	static dispatch(eventName)
		{
		document.dispatchEvent(new CustomEvent(eventName));
		}

	static render(template, data)
		{
		document.querySelector('#content').innerHTML = nunjucks.render(template + '.njk', data);
		}
	}

/*
class Panel
	{
	}

class ProgressBar
	{
	}
*/

export {UI};
