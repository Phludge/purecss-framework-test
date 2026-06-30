'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const a = document.getElementById('link-conversion');

	a.setAttribute('href', a.getAttribute('href')
		.replace('-', 'a@')
		.replaceAll('-', '.')
		.replace('/', 'oldhacker.org')
		.replace('to', 'mailto:')
	);
});