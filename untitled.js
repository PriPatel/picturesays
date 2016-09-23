var contentContainer = $('#content-container');
var imageContentContainer = $('#imageContent-container');
var audio = new Audio('sound.mp3');


function displayImages() {
  var x = Math.floor(Math.random() * 6);
  var eggSelection = eggType[x];
  var image = $('<img src="' + eggType[x].image + '">');
  var headingImage = $('<img src="' + eggType[x].headingImage + '">');
  image.addClass("image");
  headingImage.addClass("headingImage");
  contentContainer.append(headingImage);
 	imageContentContainer.append(image); 
}





function displayImage() {
  contentContainer.empty();
  imageContentContainer.empty();
  displayImages();
}



var button = $('#button');
button.click(function() {
	audio.play();
  displayImage();
  var element = document.getElementById("button");
element.innerHTML = "Crack again";
  
});


