var i = 0 //Start Point.
var images = [];
var time = 3000;

//Image List.
images[0] = 'Dance.jpeg';
images[1] = 'Forest.jpeg';
images[2] = 'Mountain.jpeg';
images[3] = 'Sky.jpeg';

//Change Image.
function changeImg() {
	document.slide.src = images[i];
	
	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}

window.onload = changeImg;