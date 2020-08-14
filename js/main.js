(function() {
	"use strict";
	console.log('page loaded');
	const TIME_TILL_POPUP = 3000;
	const POPOVER = document.querySelector(".popOver");
	const CHISEL_IMG = document.querySelector('.chiselImg');
	const SHAVINGS_IMG = document.querySelector('.shavingsImg');	
	const CANCEL_BUTTON = document.querySelector('.cancelButton');	
	const CTA_BUTTON = document.querySelector('.CTAbutton');	
	const CONFIRMATION_CHECKBOX = document.querySelector('#confirmationLabel');	
	
	/**
	 * reveal pop-over after 3 seconds, with easeOut animation
	 */
	window.setTimeout(() => {
		POPOVER.classList.remove("hidden");
		gsap.fromTo(POPOVER, { opacity: 0 }, { opacity: 1, duration: 3, ease: Power1.easeEut });
	}, TIME_TILL_POPUP);

	/**
	 * close pop-over
	 */
	function closePopOver() {
		POPOVER.classList.add("hidden");
		console.log('no page reload');
	}

	/**
	 * close pop-over on cancel button click
	 */
	CANCEL_BUTTON.addEventListener('click', closePopOver, false); 

	/**
	 * test CTA button accessibilty
	 */
	CTA_BUTTON.addEventListener('click', () => { console.log('clicked CTA'); }, false); 
	
	/**
	 * close pop-over on keyboard shortcut, ESC (ascii 27)
	 */
	document.onkeydown = function(e) {
		if(e.keyCode == 27) closePopOver();
	}

	/**
	 * check checkbox on keyboard shortcut, Enter (ascii 13)
	 */
	CONFIRMATION_CHECKBOX.onkeydown = function(e) {
		if(e.keyCode == 13) CONFIRMATION_CHECKBOX.click();
	}

	/**
	 * Scroll Parallax 
	 */
	gsap.registerPlugin(ScrollTrigger);

	// chisel
	gsap.to(CHISEL_IMG, {
		scrollTrigger:// CHISEL_IMG,
		 {
			trigger: CHISEL_IMG,
			start: 10,
			scrub: 2,
			// markers: true,
			toggleActions: "restart pause restart pause"
		},
		y: -500,
		duration: 10
	});

	// shavings
	gsap.to(SHAVINGS_IMG, {
		scrollTrigger:
		 {
			trigger: SHAVINGS_IMG,
			start: 10,
			scrub: 2,
			// markers: true,
			toggleActions: "restart pause restart pause"
		},
		y: 500,
		duration: 10
	});

})();