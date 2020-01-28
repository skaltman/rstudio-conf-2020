remark.macros.loop = function(varObject) {
  	var slideCount = varObject.getSlideCount()-1;
		var currentSlide = varObject.getCurrentSlideIndex();
		// if the slideshow is on the last slide, go back to the first slide; if not, call gotoNextSlide();
		if (currentSlide == slideCount) {
			varObject.gotoFirstSlide();
		}
		else { varObject.gotoNextSlide(); }
}
