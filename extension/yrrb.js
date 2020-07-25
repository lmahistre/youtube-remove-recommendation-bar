const hideBar = function() {
	if (document.getElementById('chips-below')) {
		document.getElementById('chips-below').remove();
	}
	if (document.getElementById('chips')) {
		document.getElementById('chips').remove();
	}
}

window.onload = hideBar;
hideBar();
