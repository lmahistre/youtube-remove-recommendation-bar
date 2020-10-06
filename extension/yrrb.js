const hideBar = function() {
	if (document.getElementById('chips-below')) {
		document.getElementById('chips-below').remove();
	}
	if (document.getElementById('chips')) {
		document.getElementById('chips').remove();
	}

	const chipBars = document.getElementsByTagName('ytd-feed-filter-chip-bar-renderer');
	for (let i=0; i<chipBars.length; i++) {
		chipBars[i].remove();
	}
}

const checkPathname = function() {
	return window.location.pathname === '/';
}

window.setInterval(function() {
	if (checkPathname()) {
		hideBar();
	}
}, 1000);

window.onload = hideBar;
