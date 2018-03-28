var secretNumber = 4;

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if (guess === secretNumber) {
  alert("CORRECT!");
}
else if (guess > secretNumber) {
  alert("TOO DAMN HIGH!");
}
else {
  alert("TOO LOW, DAMN!");
}
