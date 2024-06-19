
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("aiko");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



var modal = document.getElementById("myModal1");
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("hachi");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[1];

span.onclick = function() {
  modal.style.display = "none";
}



var modal = document.getElementById("myModal2");
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("dzeris");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[2];

span.onclick = function() {
  modal.style.display = "none";
}



var modal = document.getElementById("myModal3");
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("tomas");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[3];

span.onclick = function() {
  modal.style.display = "none";
}



var modal = document.getElementById("myModal4");
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("murzius");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[3];

span.onclick = function() {
  modal.style.display = "none";
}
