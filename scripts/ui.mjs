
class UI
	{
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

	static render(template, data)
		{
		let html = nunjucks.render(template, data);

		document.querySelector('#content').innerHTML = html;
		}
	}

class Panel
	{
	}

class ProgressBar
	{
	}

export {UI, Panel};
