
onClick('#hamburger', e =>
	{
	e.preventDefault();

	document.body.style.overflow = 'hidden';

	//el('#menu').style.transform = 'translate(-10vw)';
	el('#menu').className = 'open';
	});
