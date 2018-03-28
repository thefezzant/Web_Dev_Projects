var numSquares = 6;
var colors = [];
var correctColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
modeBtns = document.querySelectorAll(".mode");

init();

function init() {

  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function() {
      modeBtns[0].classList.remove("selected")
      modeBtns[1].classList.remove("selected")
      this.classList.add("selected")
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();

    });
  }

  for (var i = 0; i < squares.length; i++) {
    // check for clicks/correct color guess
    squares[i].addEventListener("click", function() {
      //get color of clicked
      var clickedColor = this.style.backgroundColor;
      //compare to correctColor
      if (clickedColor === correctColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(correctColor);
        h1.style.backgroundColor = correctColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });

  }
  reset();
}

function reset(){
  //make new colors
  colors = generateRandomColors(numSquares);
  //pick one
  correctColor = pickColor();
  colorDisplay.textContent = correctColor;
  //change square colors
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block"
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    // set square's bg color
    squares[i].style.backgroundColor = colors[i];
  }
}

resetButton.addEventListener("click", reset);



function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < squares.length; i++) {
  // change their color to the correct color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make array
  var arr = [];
  //add num # of random colors to it
  for (var i = 0; i < num; i++) {
    //make the colors
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
