(function($) {

	$.fn.controlMaxImageUpload = function( options ) {

		var settings = $.extend({
            // These are the defaults.
            uploadImgWrapper : ".upload-img",
            maxImage : 6,
            addUploadBtn : "button#addImgBtn",
            submitBtn : "input[type='submit']"
        }, options );


		var $imageCount = this.find("img").length,
			$inputFileWrapper = $(settings.uploadImgWrapper),
			$inputFileCount = $inputFileWrapper.find("input[type='file']").length,
			$addUploadBtn = $(settings.addUploadBtn),
			$submitBtn = $(settings.submitBtn),
			maxImage = settings.maxImage;

		toggleDisplay();
		// sum up total number of images and upload fields
		$imageCount += $inputFileCount;
		$addUploadBtn.on("click", addMoreUpload);
		return this;

		function toggleDisplay() {
			// if the number of images is zero (1 file element is alreay on the web by default)
		    if ($imageCount === 0)
		        $imageCount = 1;
		    // if max images has been reached - don't display upload form
		    if ($imageCount >= maxImage) {
		        $inputFileWrapper.css("display", "none");
		    } else if ($imageCount === (maxImage - 1)) { // you can add just one more image
		        $addUploadBtn.css("display", "none");
		    }
		}

		function addMoreUpload() {
			$imageCount += 1;
	        var element = '<input type="file" name="image_' + $imageCount + '" />';

	        $submitBtn.before(element);

	        if ($imageCount >= maxImage) {
	            $addUploadBtn.css("display", "none");
	            return;
	        }

		}
	};

})(jQuery);