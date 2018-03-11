var img = document.getElementsByTagName("img") [0];
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

img.addEventListener("click", function() {
	var i = Math.floor(Math.random()*images.length);
	img.src = "images/" + images[i];
});