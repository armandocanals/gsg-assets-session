import "./animations.css";

let firstEllipsis = document.getElementsByClassName("loading-blip")[0];
let animationCount = 0;

let flashBtn  = document.getElementsByClassName("flash-button")[0];
let flashItem = document.getElementsByClassName("flash-item")[0];
let slideBtn  = document.getElementsByClassName("slide-button")[0];
let hideBtn  = document.getElementsByClassName("slideout-button")[0];
let slideItem = document.querySelector(".slide-container .square");
let longSlideBtn  = document.getElementsByClassName("long-slide-button")[0];
let longSlideItem = document.querySelector(".long-slide-container .square");

flashBtn.addEventListener("click", function() {
  flashItem.classList.add("flash");
});

flashItem.addEventListener("animationend", function(e) {
  this.classList.remove("flash");
  console.log(e.animationName);
});

firstEllipsis.addEventListener("animationiteration", function(e) {
  animationCount = animationCount + 1;
  document.getElementById("animation-count").innerHTML = animationCount;
});

slideBtn.addEventListener("click", function() {
  slideItem.classList.remove("pin");
  slideItem.classList.remove("slidein");
  setTimeout(function(){
    slideItem.classList.add("slidein");
  }, 10);
});

hideBtn.addEventListener("click", function() {
  slideItem.classList.remove("pin");
});

slideItem.addEventListener("animationend", function() {
  this.classList.add("pin");
});

longSlideBtn.addEventListener("click", function() {
  longSlideItem.classList.add("slidein-long");
});

longSlideItem.addEventListener("animationstart", function(e){
  console.log(e);
});

longSlideItem.addEventListener("animationend", function(e) {
  this.classList.add("pin");
  console.log(e.elapsedTime);
});
