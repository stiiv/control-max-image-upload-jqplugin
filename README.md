Stiiv @ 21st April 2015
e-mail: ivan.stipic6@gmail.com

# control-max-image-upload-jqplugin
Control maximum images that can be uploaded in given image container


# example usage:
  # user has limited number of images he can upload on his profile image container

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Control max image upload plugin</title>
</head>
<body>

	<div id="img-wrapper">
		<img src="/images/image1.jpg" alt="image">
		<img src="/images/image1.jpg" alt="image">
	</div>

	<div class="upload-img">
		<form action="#">
			<input type="file">
			<input type="submit" value="Submit">
		</form>
	</div>

	<button id="addImgBtn">Add</button>

	
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"&gt; &lt;/script&gt;
<script src="controlMaxImageUpload.js"></script>
	
&lt;script&gt;

# NOTE: it is important to set settings strings in jQuery-like selector ( it will be automatically wrapped into jQuery selector )
  var settings = {
    
    uploadImgWrapper : ".upload-img", // wrapper in which you can add more upload-file fields (up to max number specified)
    maxImage : 6, // maximum number of images that can be uploaded
    addUploadBtn : "button#addImgBtn", // button which will be add more upload form fields
    submitBtn : "input[type='submit']" // button for submitting / uploading form
  
  };

	$("div#img-wrapper").controlMaxImageUpload(); // default maximum images is 6
&lt;/script&gt;
</body>
</html>
