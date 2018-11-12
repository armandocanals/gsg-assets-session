let flashBtn  = document.getElementsByClassName("flash-button")[0];
let flashItem = document.getElementsByClassName("flash-item")[0];

flashBtn.addEventListener("click", function() {
  flashItem.classList.add("flash");
});

flashItem.addEventListener("animationend", function(e) {
  this.classList.remove("flash");
  console.log(e.animationName);
});
