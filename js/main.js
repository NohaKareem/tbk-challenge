//self executing anonymous function
(function() {
	"use strict";
	console.log();
	const TIME_TILL_POPUP = 3000;
	const POPOVER = document.querySelector(".popOver");
	const CHISEL_IMG = document.querySelector('.chiselImg');
	const SHAVINGS_IMG = document.querySelector('.shavingsImg');	

	// show pop-over after 3 seconds
	window.setTimeout(() => {
		console.log('3')
		POPOVER.classList.remove("hidden");
	}, TIME_TILL_POPUP);

	// close pop-over on keyboard shortcut, ESC (ascii 27)
	document.onkeydown = function(e) {
		if(e.keyCode == 27) {
			POPOVER.classList.add("hidden");
		}
	}

	// scroll Parallax
	gsap.registerPlugin(ScrollTrigger);
	gsap.to(CHISEL_IMG, {
		scrollTrigger: CHISEL_IMG,
		//  {
			// trigger: CHISEL_IMG,
			// toggleActions: "restart pause restart pause"
		// },
		// x: 10,
		// rotation: 360,
		y: 10,
		duration: 5
	});

})();