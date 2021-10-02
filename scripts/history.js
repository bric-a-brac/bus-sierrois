
onClick('#a', e =>
	{
	e.preventDefault();

	//var stateObj = { foo: "bar" };
	history.pushState({}, "Titre A", "stops.html");
	});

onClick('#b', e =>
	{
	e.preventDefault();

	//var stateObj = { foo: "bar" };
	history.pushState({}, "Titre B", "ways.html");
	});

onClick('#c', e =>
	{
	e.preventDefault();

	let t = el('#stop-tours');
	console.log(t);
	});

/*
on(window, 'popstate', e =>
	{
	console.log(e);
	});
*/

window.onpopstate = function(e)
	{
	console.log(e);
	};
