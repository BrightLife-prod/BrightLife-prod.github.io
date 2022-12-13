var SlideContainers = document.getElementsByClassName("slide-wrapper");

function ApplySlide(SlideContainer) {
	var SlideContainerWidth = SlideContainer.offsetWidth;
	var SlideItems = SlideContainer.getElementsByTagName("div");

	function InitSlides() {
		for (let i = 0; i < SlideItems.length; i++) {
			SlideContainerWidth = SlideContainer.offsetWidth;
			SlideItems[i].style.width = SlideContainerWidth + "px";
			SlideItems[i].style.left = (i * SlideContainerWidth) + "px";
		}
	}

	var ActiveSlide = 1;
	function NextSlide() {
		ActiveSlide++;
		if (ActiveSlide > SlideItems.length) {
			ActiveSlide = 1;
		}
		let NewLeftPixel = ((ActiveSlide - 1) * SlideContainerWidth);
		SlideContainer.style.left = "-" + NewLeftPixel + "px";
	}

	InitSlides();
	for (let i = 0; i < SlideItems.length; i++) {
		SlideItems[i].style.display = "block";
	}

	window.onresize = InitSlides;
	setInterval(() => NextSlide(), 5000);
}

for (let i = 0; i < SlideContainers.length; i++) {
	ApplySlide(SlideContainers[i]);
}