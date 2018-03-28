var button = document.querySelector("button");
var isPurple = true;
var bgColor = document.querySelectorAll("body")[0].style;

button.addEventListener("click", function() {
  if (isPurple) {
    bgColor.background = "#222";
    isPurple = !isPurple;
  }
  else {
    bgColor.background = "white";
    isPurple = !isPurple;
  }

});
