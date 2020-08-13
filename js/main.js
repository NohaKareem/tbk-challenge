//self executing anonymous function
(function() {
	"use strict";
	console.log();
	const TIME_TILL_POPUP = 3000;
	const popOver = document.querySelector(".popOver");

	// show pop-over after 3 seconds
	window.setTimeout(() => {
		popOver.classList.remove("hidden");
	}, TIME_TILL_POPUP);

	// close pop-over on keyboard shortcut, ESC (ascii 27)
	document.onkeydown = function(e) {
		if(e.keyCode == 27) {
			popOver.classList.add("hidden");
		}
	}
})();